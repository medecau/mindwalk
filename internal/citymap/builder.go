package citymap

import (
	"bytes"
	"context"
	"errors"
	"io"
	"math"
	"os"
	"os/exec"
	"path/filepath"
	"sort"
	"strconv"
	"strings"
	"time"

	"github.com/cosmtrek/mindwalk/internal/model"
)

type Builder struct{}

// Progress reports build progress. Phase is "scan" while the file list is being
// enumerated (total unknown, reported as 0) and "read" while each file is being
// inspected (total is the file count). It is called on a best-effort cadence,
// not once per file.
type Progress func(phase string, done, total int)

// IsRepo reports whether root sits inside a git work tree. The server uses it as
// a cheap gate: a repo builds from `git ls-files` (bounded and fast), while a
// non-repo root would fall back to walking the whole directory tree — expensive
// enough that the user is asked to opt in first.
func IsRepo(root string) bool {
	abs, err := filepath.Abs(root)
	if err != nil {
		return false
	}
	out, err := gitCommand(abs, "rev-parse", "--is-inside-work-tree").Output()
	return err == nil && strings.TrimSpace(string(out)) == "true"
}

func (b Builder) Build(repoRoot string, trace *model.Trace) (*model.CityMap, error) {
	return b.BuildContext(context.Background(), repoRoot, trace, nil)
}

// BuildContext is Build with cancellation and progress reporting. Cancelling ctx
// (e.g. the user aborts, or the SSE client disconnects) stops the walk promptly
// and returns ctx.Err(). progress may be nil.
func (Builder) BuildContext(ctx context.Context, repoRoot string, trace *model.Trace, progress Progress) (*model.CityMap, error) {
	root, err := filepath.Abs(repoRoot)
	if err != nil {
		return nil, err
	}
	files, err := listFilesContext(ctx, root, progress)
	if err != nil {
		return nil, err
	}

	seen := map[string]bool{}
	cityFiles := make([]model.CityFile, 0, len(files))
	for i, rel := range files {
		if err := ctx.Err(); err != nil {
			return nil, err
		}
		meta, err := inspectFile(root, rel)
		if err != nil {
			continue
		}
		seen[rel] = true
		cityFiles = append(cityFiles, meta)
		if progress != nil && (i&255 == 0 || i == len(files)-1) {
			progress("read", i+1, len(files))
		}
	}

	if trace != nil {
		for _, event := range trace.Events {
			for _, target := range event.Targets {
				if target.Path == "" || seen[target.Path] {
					continue
				}
				if target.Weak {
					continue
				}
				seen[target.Path] = true
				cityFiles = append(cityFiles, model.CityFile{
					Path:  target.Path,
					Dir:   filepath.ToSlash(filepath.Dir(target.Path)),
					Lang:  langForPath(target.Path),
					Ghost: true,
				})
			}
		}
	}

	sort.Slice(cityFiles, func(i, j int) bool {
		return cityFiles[i].Path < cityFiles[j].Path
	})
	for i := range cityFiles {
		cityFiles[i].ID = i
	}

	rootNode := buildTree(cityFiles)
	dirs := make([]model.CityDir, 0)
	layoutNode(rootNode, model.Rect{X: -60, Z: -60, W: 120, D: 120}, 0, &cityFiles, &dirs)

	commit, dirty := RepoState(root)
	return &model.CityMap{
		Version: 1,
		Repo: model.RepoMeta{
			Root:        root,
			Commit:      commit,
			Dirty:       dirty,
			GeneratedAt: time.Now().UTC().Format(time.RFC3339),
		},
		Files: cityFiles,
		Dirs:  dirs,
		Layout: model.LayoutMeta{
			Algorithm: "quadtree-organic-v1",
			Weight:    "log10(max(bytes, 16))",
		},
	}, nil
}

// gitCommand builds a read-only git invocation hardened against repo-local
// configuration that can execute arbitrary programs. mindwalk inspects
// repositories it did not create, and git honors a repo's own .git/config:
// settings such as core.fsmonitor (a program path) or a custom core.hooksPath
// are run during the index refresh that status/ls-files trigger. Command-line
// -c overrides the repo config, so we force those exec vectors off before
// touching an untrusted tree.
func gitCommand(root string, args ...string) *exec.Cmd {
	return gitCommandContext(context.Background(), root, args...)
}

func gitCommandContext(ctx context.Context, root string, args ...string) *exec.Cmd {
	full := append([]string{
		"-c", "core.fsmonitor=false",
		"-c", "core.hooksPath=/dev/null",
		"-C", root,
	}, args...)
	return exec.CommandContext(ctx, "git", full...)
}

func listFiles(root string) ([]string, error) {
	return listFilesContext(context.Background(), root, nil)
}

func listFilesContext(ctx context.Context, root string, progress Progress) ([]string, error) {
	cmd := gitCommandContext(ctx, root, "ls-files", "-co", "--exclude-standard", "-z")
	out, err := cmd.Output()
	if err == nil && len(out) > 0 {
		parts := bytes.Split(out, []byte{0})
		files := make([]string, 0, len(parts))
		for _, part := range parts {
			if len(part) == 0 {
				continue
			}
			files = append(files, filepath.ToSlash(string(part)))
		}
		return files, nil
	}
	if err := ctx.Err(); err != nil {
		return nil, err
	}

	// Not a git repo (or git unavailable): walk the tree. This is the expensive
	// path the server gates behind user consent, so it reports scan progress and
	// bails out promptly when ctx is cancelled.
	var files []string
	walkErr := filepath.WalkDir(root, func(path string, entry os.DirEntry, walkErr error) error {
		if walkErr != nil {
			return walkErr
		}
		if err := ctx.Err(); err != nil {
			return err
		}
		if entry.IsDir() {
			switch entry.Name() {
			case ".git", "node_modules", ".venv", "dist", "build":
				return filepath.SkipDir
			}
			return nil
		}
		rel, err := filepath.Rel(root, path)
		if err != nil {
			return err
		}
		files = append(files, filepath.ToSlash(rel))
		if progress != nil && len(files)&511 == 0 {
			progress("scan", len(files), 0)
		}
		return nil
	})
	if walkErr != nil {
		return nil, walkErr
	}
	if len(files) == 0 {
		return nil, errors.New("no files found")
	}
	sort.Strings(files)
	return files, nil
}

func inspectFile(root, rel string) (model.CityFile, error) {
	abs := filepath.Join(root, filepath.FromSlash(rel))
	info, err := os.Stat(abs)
	if err != nil {
		return model.CityFile{}, err
	}
	lines := 1
	if !isBinaryLike(abs, rel) {
		var err error
		lines, err = countLines(abs)
		if err != nil {
			lines = 0
		}
	}
	dir := filepath.ToSlash(filepath.Dir(rel))
	if dir == "." {
		dir = ""
	}
	return model.CityFile{
		Path:  filepath.ToSlash(rel),
		Dir:   dir,
		Lines: lines,
		Bytes: info.Size(),
		Lang:  langForPath(rel),
	}, nil
}

func isBinaryLike(abs, path string) bool {
	ext := strings.ToLower(filepath.Ext(path))
	switch ext {
	case ".pdf", ".png", ".jpg", ".jpeg", ".gif", ".webp", ".ico", ".zip", ".gz", ".tgz", ".mp4", ".mov", ".mp3", ".woff", ".woff2", ".ttf", ".otf":
		return true
	}
	f, err := os.Open(abs)
	if err != nil {
		return false
	}
	defer f.Close()
	buf := make([]byte, 8192)
	n, err := f.Read(buf)
	if err != nil && n == 0 {
		return false
	}
	return bytes.Contains(buf[:n], []byte{0})
}

func countLines(path string) (int, error) {
	f, err := os.Open(path)
	if err != nil {
		return 0, err
	}
	defer f.Close()

	lines := 0
	hasBytes := false
	var last byte
	buf := make([]byte, 64*1024)
	for {
		n, err := f.Read(buf)
		if n > 0 {
			hasBytes = true
			last = buf[n-1]
			lines += bytes.Count(buf[:n], []byte{'\n'})
		}
		if err == io.EOF {
			break
		}
		if err != nil {
			return lines, err
		}
	}
	if hasBytes && last != '\n' {
		lines++
	}
	return lines, nil
}

func langForPath(path string) string {
	ext := strings.TrimPrefix(strings.ToLower(filepath.Ext(path)), ".")
	switch ext {
	case "go":
		return "go"
	case "ts", "tsx":
		return "typescript"
	case "js", "jsx":
		return "javascript"
	case "md", "mdx":
		return "markdown"
	case "py":
		return "python"
	case "json":
		return "json"
	case "yaml", "yml":
		return "yaml"
	case "css":
		return "css"
	case "html":
		return "html"
	case "":
		return "text"
	default:
		return ext
	}
}

// RepoState reports the repo's short HEAD commit and whether its worktree has
// uncommitted changes. Exported so callers outside a full Build — e.g. the
// server's cheap repo-discovery listing — can read just the commit.
func RepoState(root string) (string, bool) {
	commitBytes, err := gitCommand(root, "rev-parse", "--short", "HEAD").Output()
	commit := ""
	if err == nil {
		commit = strings.TrimSpace(string(commitBytes))
	}

	statusBytes, err := gitCommand(root, "status", "--porcelain").Output()
	dirty := err == nil && len(bytes.TrimSpace(statusBytes)) > 0
	return commit, dirty
}

type node struct {
	name      string
	path      string
	children  map[string]*node
	files     []int
	weight    float64
	rect      model.Rect
	fileCount int
	lines     int
	// maxDepth is the number of directory levels nested below this node (0
	// for a node with no child dirs). It ranks sibling subtrees for the
	// layout's burrow bias: deep, file-heavy subtrees read as districts.
	maxDepth int
}

func buildTree(files []model.CityFile) *node {
	root := &node{name: "", children: map[string]*node{}}
	for i, file := range files {
		parts := splitPath(file.Path)
		cur := root
		for _, part := range parts[:len(parts)-1] {
			next := cur.children[part]
			if next == nil {
				nextPath := part
				if cur.path != "" {
					nextPath = cur.path + "/" + part
				}
				next = &node{name: part, path: nextPath, children: map[string]*node{}}
				cur.children[part] = next
			}
			cur = next
		}
		cur.files = append(cur.files, i)
	}
	computeWeight(root, files)
	return root
}

func splitPath(path string) []string {
	parts := strings.Split(filepath.ToSlash(path), "/")
	out := parts[:0]
	for _, part := range parts {
		if part != "" && part != "." {
			out = append(out, part)
		}
	}
	if len(out) == 0 {
		return []string{path}
	}
	return out
}

func computeWeight(n *node, files []model.CityFile) float64 {
	n.weight = 0
	for _, idx := range n.files {
		n.weight += fileWeight(files[idx])
		n.fileCount++
		n.lines += files[idx].Lines
	}
	for _, child := range sortedChildren(n.children) {
		n.weight += computeWeight(child, files)
		n.fileCount += child.fileCount
		n.lines += child.lines
		if child.maxDepth+1 > n.maxDepth {
			n.maxDepth = child.maxDepth + 1
		}
	}
	if n.weight <= 0 {
		n.weight = 1
	}
	return n.weight
}

// maxAspect bounds every emitted rect (file and directory) to a near-square
// footprint: max(w/d, d/w) <= maxAspect. Quadrant geometry can drift wider or
// taller than that under weight and jitter, so it is enforced defensively
// wherever a rect is finalized, not only on file leaves.
const maxAspect = 1.5

func layoutNode(n *node, rect model.Rect, level int, files *[]model.CityFile, dirs *[]model.CityDir) {
	n.rect = rect
	if n.path != "" {
		*dirs = append(*dirs, model.CityDir{
			Path:      n.path,
			Depth:     len(strings.Split(n.path, "/")),
			Rect:      n.rect,
			FileCount: n.fileCount,
			Lines:     n.lines,
		})
	}

	children := sortedChildren(n.children)
	if len(children) == 0 {
		placeFiles(n.files, rect, files)
		return
	}

	ownWeight := sumFileWeight(n.files, *files)
	coreFrac := 0.0
	if n.weight > 0 {
		coreFrac = clamp(math.Sqrt(ownWeight/n.weight), 0, 0.33)
	}

	// The root sits at the exact map center: its own cross split is never
	// jittered, so a repo's loose top-level files land dead center and the
	// top-level "+" between quadrant districts reads as a crisp, literal
	// cross. Jitter (and the resulting organic feel) grows with depth.
	jitter := 0.4
	if n.path == "" {
		jitter = 0
	}
	core, quadrants := crossSplit(n.path, rect, coreFrac, jitter)
	if len(n.files) > 0 {
		placeFiles(n.files, capAspect(core, maxAspect), files)
	}
	layoutQuadrants(children, quadrants, level+1, n.path, files, dirs)
}

// layoutQuadrants buckets dirs into at most four groups by weight (Longest
// Processing Time bin-packing), assigns each group a quadrant of rect biased
// by weight and depth ("burrow" districts land in the corners farthest from
// the map's origin), and recurses. A group holding more than one dir did not
// fit the four-quadrant cross cleanly -- it re-runs the same cross primitive
// inside its quadrant (quadtree overflow) rather than getting its own plate.
func layoutQuadrants(children []*node, quadrants [4]model.Rect, level int, saltPath string, files *[]model.CityFile, dirs *[]model.CityDir) {
	buckets := bucketChildren(children)
	assigned := assignQuadrants(quadrants, buckets)
	gutter := streetGutter(level)
	for b, bucket := range buckets {
		if len(bucket) == 0 {
			continue // empty quadrant stays a bare plaza
		}
		placed := capAspect(inset(quadrants[assigned[b]], gutter), maxAspect)
		if len(bucket) == 1 {
			layoutNode(bucket[0], placed, level, files, dirs)
			continue
		}
		subSalt := saltPath + "#" + strconv.Itoa(b)
		_, subQuadrants := crossSplit(subSalt, placed, 0, 0.4)
		layoutQuadrants(bucket, subQuadrants, level+1, subSalt, files, dirs)
	}
}

// crossSplit divides rect with a "+" through a weighted, hash-jittered point
// near its center, carving an optional central core (for a node's own loose
// files) out of the crossing so the four quadrants never touch it directly.
// The gap this leaves -- between core and quadrants, and between quadrants
// once inset shrinks them further -- is what reads as streets.
func crossSplit(saltPath string, rect model.Rect, coreFrac, jitterAmp float64) (model.Rect, [4]model.Rect) {
	fx := clamp(0.5+(hashFrac(saltPath, "x")-0.5)*jitterAmp, 0.3, 0.7)
	fy := clamp(0.5+(hashFrac(saltPath, "y")-0.5)*jitterAmp, 0.3, 0.7)
	splitX := rect.X + rect.W*fx
	splitZ := rect.Z + rect.D*fy

	coreHalfW := clamp(rect.W*coreFrac/2, 0, math.Min(splitX-rect.X, rect.X+rect.W-splitX)*0.9)
	coreHalfD := clamp(rect.D*coreFrac/2, 0, math.Min(splitZ-rect.Z, rect.Z+rect.D-splitZ)*0.9)

	core := model.Rect{X: splitX - coreHalfW, Z: splitZ - coreHalfD, W: coreHalfW * 2, D: coreHalfD * 2}
	quadrants := [4]model.Rect{
		{X: rect.X, Z: rect.Z, W: (splitX - coreHalfW) - rect.X, D: (splitZ - coreHalfD) - rect.Z},
		{X: splitX + coreHalfW, Z: rect.Z, W: (rect.X + rect.W) - (splitX + coreHalfW), D: (splitZ - coreHalfD) - rect.Z},
		{X: rect.X, Z: splitZ + coreHalfD, W: (splitX - coreHalfW) - rect.X, D: (rect.Z + rect.D) - (splitZ + coreHalfD)},
		{X: splitX + coreHalfW, Z: splitZ + coreHalfD, W: (rect.X + rect.W) - (splitX + coreHalfW), D: (rect.Z + rect.D) - (splitZ + coreHalfD)},
	}
	return core, quadrants
}

// bucketChildren packs dirs into exactly four buckets via Longest Processing
// Time: sorted by descending weight (name breaks ties), each dir goes to the
// currently lightest bucket. Four or fewer dirs always land one per bucket;
// more than four forces at least one bucket to hold multiple dirs.
func bucketChildren(children []*node) [4][]*node {
	sorted := make([]*node, len(children))
	copy(sorted, children)
	sort.SliceStable(sorted, func(i, j int) bool {
		if sorted[i].weight != sorted[j].weight {
			return sorted[i].weight > sorted[j].weight
		}
		return sorted[i].name < sorted[j].name
	})
	var buckets [4][]*node
	var weights [4]float64
	for _, c := range sorted {
		lightest := 0
		for i := 1; i < 4; i++ {
			if weights[i] < weights[lightest] {
				lightest = i
			}
		}
		buckets[lightest] = append(buckets[lightest], c)
		weights[lightest] += c.weight
	}
	return buckets
}

// assignQuadrants pairs the bucket with the highest weight*depth score --
// the heaviest, most deeply nested subtree -- with the quadrant farthest
// from the map's origin, and so on down. Applying this rule at every
// recursion level consistently pushes deep, file-heavy districts toward the
// outer corners of the whole map, not just of their immediate parent cell.
func assignQuadrants(quadrants [4]model.Rect, buckets [4][]*node) [4]int {
	type ranked struct {
		idx int
		key float64
	}
	byQuadrant := make([]ranked, 4)
	for i, q := range quadrants {
		cx := q.X + q.W/2
		cz := q.Z + q.D/2
		byQuadrant[i] = ranked{i, cx*cx + cz*cz}
	}
	sort.SliceStable(byQuadrant, func(i, j int) bool { return byQuadrant[i].key > byQuadrant[j].key })

	byBucket := make([]ranked, 4)
	for i, b := range buckets {
		weight, depth := scoreBucket(b)
		byBucket[i] = ranked{i, weight * (1 + float64(depth))}
	}
	sort.SliceStable(byBucket, func(i, j int) bool {
		if byBucket[i].key != byBucket[j].key {
			return byBucket[i].key > byBucket[j].key
		}
		return byBucket[i].idx < byBucket[j].idx
	})

	var assigned [4]int
	for slot := 0; slot < 4; slot++ {
		assigned[byBucket[slot].idx] = byQuadrant[slot].idx
	}
	return assigned
}

func scoreBucket(bucket []*node) (weight float64, maxDepth int) {
	for _, c := range bucket {
		weight += c.weight
		if c.maxDepth > maxDepth {
			maxDepth = c.maxDepth
		}
	}
	return weight, maxDepth
}

func sumFileWeight(idxs []int, files []model.CityFile) float64 {
	total := 0.0
	for _, idx := range idxs {
		total += fileWeight(files[idx])
	}
	return total
}

// placeFiles packs file footprints into rect by generate-then-place-with-
// slack: each footprint's area comes from its weight share of the cell at
// ~65% density (the rest reads as plaza), its aspect is drawn from a hash of
// its own path so it lands in [1/maxAspect, maxAspect] by construction, and
// it is shelf-packed row by row with a small hashed position jitter clamped
// fully inside rect -- the clamp is what keeps jittered footprints from ever
// spilling past the cell into a sibling's.
func placeFiles(idxs []int, rect model.Rect, files *[]model.CityFile) {
	if len(idxs) == 0 {
		return
	}
	sorted := make([]int, len(idxs))
	copy(sorted, idxs)
	sort.SliceStable(sorted, func(i, j int) bool {
		wi, wj := fileWeight((*files)[sorted[i]]), fileWeight((*files)[sorted[j]])
		if wi != wj {
			return wi > wj
		}
		return (*files)[sorted[i]].Path < (*files)[sorted[j]].Path
	})

	total := sumFileWeight(sorted, *files)
	if total <= 0 {
		total = 1
	}
	const density = 0.65
	scale := rect.W * rect.D * density / total

	x, z, rowH := rect.X, rect.Z, 0.0
	for _, idx := range sorted {
		file := (*files)[idx]
		area := math.Max(fileWeight(file)*scale, 0.09)
		aspect := 1/maxAspect + hashFrac(file.Path, "aspect")*(maxAspect-1/maxAspect)
		side := math.Sqrt(area)
		w := math.Min(side*math.Sqrt(aspect), rect.W)
		d := math.Min(side/math.Sqrt(aspect), rect.D)

		if x+w > rect.X+rect.W && x > rect.X {
			x = rect.X
			z += rowH
			rowH = 0
		}
		jx := (hashFrac(file.Path, "jx") - 0.5) * 0.3 * w
		jz := (hashFrac(file.Path, "jz") - 0.5) * 0.3 * d
		fx := clamp(x+jx, rect.X, rect.X+rect.W-w)
		fz := clamp(z+jz, rect.Z, rect.Z+rect.D-d)
		(*files)[idx].Rect = capAspect(model.Rect{X: fx, Z: fz, W: w, D: d}, maxAspect)

		x += w
		rowH = math.Max(rowH, d)
	}
}

// streetGutter narrows as recursion deepens: broad avenues separate the
// top-level districts, finer alleys separate the burrows nested inside them.
func streetGutter(level int) float64 {
	return math.Max(2.4/math.Pow(1.6, float64(level)), 0.12)
}

func fnv1a(s string) uint32 {
	h := uint32(2166136261)
	for i := 0; i < len(s); i++ {
		h ^= uint32(s[i])
		h *= 16777619
	}
	return h
}

// hashFrac derives a deterministic pseudo-random fraction in [0,1) from a
// path and a salt that distinguishes independent uses (split axis, footprint
// aspect, position jitter) of the same path -- the server-side counterpart
// to the FNV-1a idiom CityScene.tsx's baseColor already uses client-side for
// per-file color jitter.
func hashFrac(path, salt string) float64 {
	return float64(fnv1a(path+"\x00"+salt)) / 4294967295.0
}

func clamp(v, lo, hi float64) float64 {
	if hi < lo {
		hi = lo
	}
	if v < lo {
		return lo
	}
	if v > hi {
		return hi
	}
	return v
}

func sortedChildren(children map[string]*node) []*node {
	names := make([]string, 0, len(children))
	for name := range children {
		names = append(names, name)
	}
	sort.Strings(names)
	out := make([]*node, 0, len(names))
	for _, name := range names {
		out = append(out, children[name])
	}
	return out
}

func capAspect(rect model.Rect, maxRatio float64) model.Rect {
	if rect.W <= 0 || rect.D <= 0 || maxRatio <= 1 {
		return rect
	}
	if rect.W/rect.D > maxRatio {
		newW := rect.D * maxRatio
		rect.X += (rect.W - newW) / 2
		rect.W = newW
	} else if rect.D/rect.W > maxRatio {
		newD := rect.W * maxRatio
		rect.Z += (rect.D - newD) / 2
		rect.D = newD
	}
	return rect
}

// minFileBytes floors the size fed to fileWeight so empty and near-empty files
// still get a rectangle (and log10 stays well-defined and non-negative).
const minFileBytes = 16

func fileWeight(file model.CityFile) float64 {
	// Rectangle area is proportional to this weight, so size it by log10 of the
	// file's bytes: the dynamic range collapses to orders of magnitude, and a
	// multi-megabyte file (usually generated — lockfiles, bundles, data blobs)
	// no longer dwarfs the kilobyte source files around it. Keying on bytes
	// alone (rather than max(lines, bytes/4096)) also stops a huge line count
	// from dominating on its own axis.
	size := float64(file.Bytes)
	if size < minFileBytes {
		size = minFileBytes
	}
	return math.Log10(size)
}

func inset(rect model.Rect, pad float64) model.Rect {
	if rect.W > pad*2 {
		rect.X += pad
		rect.W -= pad * 2
	}
	if rect.D > pad*2 {
		rect.Z += pad
		rect.D -= pad * 2
	}
	return rect
}
