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

// quadItem is one thing competing for space under a node's split: either a
// child directory (recurses via layoutNode) or the node's own loose files
// (placed directly, no CityDir of its own). Treating both the same way is
// what lets a node's own files land wherever the burrow bias puts them --
// one block among peers -- instead of a special, always-central plaza.
type quadItem struct {
	dir      *node
	files    []int
	weight   float64
	maxDepth int // 0 for the own-files item; also 0 for a childless dir
}

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

	items := make([]quadItem, 0, len(n.children)+1)
	if len(n.files) > 0 {
		items = append(items, quadItem{files: n.files, weight: sumFileWeight(n.files, *files)})
	}
	for _, child := range sortedChildren(n.children) {
		items = append(items, quadItem{dir: child, weight: child.weight, maxDepth: child.maxDepth})
	}

	// The root's own split is never jittered, so the top-level "+" between
	// quadrant districts reads as a crisp, literal cross. Jitter (and the
	// resulting organic feel) grows with depth.
	jitter := 0.4
	if n.path == "" {
		jitter = 0
	}
	layoutItems(items, rect, level, n.path, jitter, files, dirs)
}

// layoutItems places a node's own files (if any) and its child dirs as
// siblings competing for the same cell: it buckets them into at most four
// groups by weight (Longest Processing Time bin-packing), then sizes and
// positions exactly one contiguous cell per bucket so they fully tile rect
// -- never leaving a cell reserved for nothing. Position is biased by depth
// (the deepest bucket gets the side farthest from the map's global origin)
// while size is biased by weight (heavier buckets get more room), so the
// two pulls don't fight. A node's own loose files are always depth 0, so
// bucketItems ranks them last and layoutBuckets carves their cell out last
// too -- see layoutAroundCore -- landing them as a small block next to their
// siblings rather than a special centered plaza. A bucket holding more than
// one item did not fit cleanly and re-runs this same primitive inside its
// own cell (quadtree overflow).
func layoutItems(items []quadItem, rect model.Rect, level int, saltPath string, jitter float64, files *[]model.CityFile, dirs *[]model.CityDir) {
	if len(items) == 0 {
		return
	}
	if len(items) == 1 {
		placeItem(items[0], rect, level, files, dirs)
		return
	}

	buckets := bucketItems(items) // sorted deepest first, weight breaks ties
	cells := layoutBuckets(saltPath, rect, buckets, jitter)
	gutter := streetGutter(level + 1)

	for i, bucket := range buckets {
		placed := capAspect(inset(cells[i], gutter), maxAspect)
		if len(bucket) == 1 {
			placeItem(bucket[0], placed, level+1, files, dirs)
			continue
		}
		subSalt := saltPath + "#" + strconv.Itoa(i)
		layoutItems(bucket, placed, level+1, subSalt, 0.4, files, dirs)
	}
}

func placeItem(item quadItem, rect model.Rect, level int, files *[]model.CityFile, dirs *[]model.CityDir) {
	if item.dir != nil {
		layoutNode(item.dir, rect, level, files, dirs)
		return
	}
	placeFiles(item.files, rect, files)
}

// bucketItems packs a node's child dirs into buckets via Longest Processing
// Time (sorted by descending weight, name breaks ties; each dir goes to the
// currently lightest bucket), then re-sorts the buckets by depth, deepest
// first (weight only breaks ties): position is a depth question, not a
// weight one -- a bucket's cell grows toward its own far corner as its
// weight share grows regardless of which corner it was assigned, so ranking
// by weight would fight the very growth it causes.
//
// A node's own loose files, if present, are pulled out before LPT runs and
// always get their own trailing bucket rather than competing for one of the
// (up to) four slots: merging them into an LPT bucket alongside a deeper
// child dir would raise that bucket's depth, defeating the deepest-first
// sort below even though the files themselves are always depth 0. Dirs
// still get one fewer slot to share when own-files claims one, so five or
// more child dirs now overflow into a shared bucket the same way four or
// more always did.
func bucketItems(items []quadItem) [][]quadItem {
	var own *quadItem
	dirs := make([]quadItem, 0, len(items))
	for i := range items {
		if items[i].dir == nil {
			it := items[i]
			own = &it
			continue
		}
		dirs = append(dirs, items[i])
	}

	slots := 4
	if own != nil {
		slots = 3
	}

	sorted := make([]quadItem, len(dirs))
	copy(sorted, dirs)
	sort.SliceStable(sorted, func(i, j int) bool {
		if sorted[i].weight != sorted[j].weight {
			return sorted[i].weight > sorted[j].weight
		}
		return itemKey(sorted[i]) < itemKey(sorted[j])
	})
	n := len(sorted)
	if n > slots {
		n = slots
	}
	var buckets [][]quadItem
	if n > 0 {
		buckets = make([][]quadItem, n)
		bucketWeight := make([]float64, n)
		for _, it := range sorted {
			lightest := 0
			for i := 1; i < n; i++ {
				if bucketWeight[i] < bucketWeight[lightest] {
					lightest = i
				}
			}
			buckets[lightest] = append(buckets[lightest], it)
			bucketWeight[lightest] += it.weight
		}
	}
	if own != nil {
		buckets = append(buckets, []quadItem{*own})
	}

	sort.SliceStable(buckets, func(i, j int) bool {
		wi, di := scoreItems(buckets[i])
		wj, dj := scoreItems(buckets[j])
		if di != dj {
			return di > dj
		}
		if wi != wj {
			return wi > wj
		}
		return itemKey(buckets[i][0]) < itemKey(buckets[j][0])
	})
	return buckets
}

func itemKey(item quadItem) string {
	if item.dir != nil {
		return item.dir.name
	}
	return ""
}

func scoreItems(items []quadItem) (weight float64, maxDepth int) {
	for _, it := range items {
		weight += it.weight
		if it.maxDepth > maxDepth {
			maxDepth = it.maxDepth
		}
	}
	return weight, maxDepth
}

// layoutBuckets sizes and positions one contiguous cell per bucket, in the
// same order: buckets is sorted deepest first (bucketItems' contract), so
// index order alone decides which side of each split is "outward" (farthest
// from the map's global origin) versus "inward". Size, in contrast, is
// weight-proportional: a bucket's share of the split grows with its own
// weight regardless of which side it landed on. len==4 is the literal "+"
// cross; fewer buckets degrade to fewer splits so cells never sit empty.
//
// A node's own files, when present, skip this and go through
// layoutAroundCore instead: they are always ranked last (shallowest), and a
// quadrant corner still gives its occupant a full outer edge of the map, so
// the corner closest to center is not actually close to center. Peeling
// buckets off one at a time gives the final (own-files) remainder interior
// edges on every side but one.
func layoutBuckets(saltPath string, rect model.Rect, buckets [][]quadItem, jitterAmp float64) []model.Rect {
	if ownIdx := ownFilesIndex(buckets); ownIdx >= 0 {
		return layoutAroundCore(saltPath, rect, buckets, ownIdx, jitterAmp)
	}

	weights := make([]float64, len(buckets))
	for i, b := range buckets {
		weights[i], _ = scoreItems(b)
	}
	switch len(weights) {
	case 1:
		return []model.Rect{rect}
	case 2:
		return splitTwo(saltPath, rect, weights[0], weights[1], jitterAmp)
	case 3:
		head := splitTwo(saltPath, rect, weights[0], weights[1]+weights[2], jitterAmp)
		tail := splitTwo(saltPath+"#r", head[1], weights[1], weights[2], jitterAmp)
		return []model.Rect{head[0], tail[0], tail[1]}
	default:
		return splitFour(saltPath, rect, weights, jitterAmp)
	}
}

func ownFilesIndex(buckets [][]quadItem) int {
	for i, b := range buckets {
		if len(b) == 1 && b[0].dir == nil {
			return i
		}
	}
	return -1
}

// layoutAroundCore peels sibling buckets off the rect one at a time, deepest
// first, each via splitTwo: every peel claims one outer edge of whatever
// region remains and leaves the rest one edge shorter. What's left once every
// sibling is peeled — the own-files bucket — therefore touches at most one of
// the original rect's outer edges instead of a full one, landing it as a
// small, largely interior cell next to its siblings rather than a corner
// wedge sharing two outer edges with the map itself.
func layoutAroundCore(saltPath string, rect model.Rect, buckets [][]quadItem, ownIdx int, jitterAmp float64) []model.Rect {
	remainingWeight := 0.0
	for _, b := range buckets {
		w, _ := scoreItems(b)
		remainingWeight += w
	}

	cells := make([]model.Rect, len(buckets))
	remaining := rect
	peel := 0
	for i, b := range buckets {
		if i == ownIdx {
			continue
		}
		outWeight, _ := scoreItems(b)
		remainingWeight -= outWeight
		pieces := splitTwo(saltPath+"#p"+strconv.Itoa(peel), remaining, outWeight, remainingWeight, jitterAmp)
		cells[i] = pieces[0]
		remaining = pieces[1]
		peel++
	}
	cells[ownIdx] = remaining
	return cells
}

// farness ranks a point by squared distance from the map's global origin --
// used to decide, before any size is chosen, which half of a split sits
// farther out, so a heavy bucket can be pointed at that half and then sized
// by its own weight rather than the two decisions fighting each other.
func farness(x, z float64) float64 { return x*x + z*z }

// splitTwo divides rect in two along its longer dimension (keeping both
// pieces closer to square) at a point blending the outward piece's weight
// share with a small hash jitter. It always returns [outward, inward], so
// the caller's heaviest-first weight order maps directly onto "farther from
// the center first."
func splitTwo(saltPath string, rect model.Rect, outWeight, inWeight, jitterAmp float64) []model.Rect {
	share := outWeight / math.Max(outWeight+inWeight, 1e-9)
	f := clamp(share+(hashFrac(saltPath, "s")-0.5)*jitterAmp, 0.15, 0.85)

	if rect.W >= rect.D {
		outward := farness(rect.X, rect.Z+rect.D/2) >= farness(rect.X+rect.W, rect.Z+rect.D/2)
		frac := f
		if !outward {
			frac = 1 - f
		}
		splitX := rect.X + rect.W*frac
		lo := model.Rect{X: rect.X, Z: rect.Z, W: splitX - rect.X, D: rect.D}
		hi := model.Rect{X: splitX, Z: rect.Z, W: (rect.X + rect.W) - splitX, D: rect.D}
		if outward {
			return []model.Rect{lo, hi}
		}
		return []model.Rect{hi, lo}
	}
	outward := farness(rect.X+rect.W/2, rect.Z) >= farness(rect.X+rect.W/2, rect.Z+rect.D)
	frac := f
	if !outward {
		frac = 1 - f
	}
	splitZ := rect.Z + rect.D*frac
	lo := model.Rect{X: rect.X, Z: rect.Z, W: rect.W, D: splitZ - rect.Z}
	hi := model.Rect{X: rect.X, Z: splitZ, W: rect.W, D: (rect.Z + rect.D) - splitZ}
	if outward {
		return []model.Rect{lo, hi}
	}
	return []model.Rect{hi, lo}
}

// splitFour is the literal "+" cross: rect's four corners have a fixed
// farness ranking independent of where the cross falls, so that ranking
// decides which of the (already weight-sorted) buckets lands in which
// corner; only then does each axis split at a point weighted by the
// resulting left/right and top/bottom weight shares, plus a small hash
// jitter.
func splitFour(saltPath string, rect model.Rect, weights []float64, jitterAmp float64) []model.Rect {
	type slot struct {
		idx int // 0=TL 1=TR 2=BL 3=BR
		key float64
	}
	corners := [4][2]float64{
		{rect.X, rect.Z},
		{rect.X + rect.W, rect.Z},
		{rect.X, rect.Z + rect.D},
		{rect.X + rect.W, rect.Z + rect.D},
	}
	slots := make([]slot, 4)
	for i, c := range corners {
		slots[i] = slot{i, farness(c[0], c[1])}
	}
	sort.SliceStable(slots, func(i, j int) bool { return slots[i].key > slots[j].key })

	var weightBySlot [4]float64
	for rank, s := range slots {
		weightBySlot[s.idx] = weights[rank]
	}
	left, right := weightBySlot[0]+weightBySlot[2], weightBySlot[1]+weightBySlot[3]
	top, bottom := weightBySlot[0]+weightBySlot[1], weightBySlot[2]+weightBySlot[3]
	fx := clamp(left/math.Max(left+right, 1e-9)+(hashFrac(saltPath, "x")-0.5)*jitterAmp, 0.15, 0.85)
	fy := clamp(top/math.Max(top+bottom, 1e-9)+(hashFrac(saltPath, "y")-0.5)*jitterAmp, 0.15, 0.85)
	splitX := rect.X + rect.W*fx
	splitZ := rect.Z + rect.D*fy

	cellBySlot := [4]model.Rect{
		{X: rect.X, Z: rect.Z, W: splitX - rect.X, D: splitZ - rect.Z},
		{X: splitX, Z: rect.Z, W: (rect.X + rect.W) - splitX, D: splitZ - rect.Z},
		{X: rect.X, Z: splitZ, W: splitX - rect.X, D: (rect.Z + rect.D) - splitZ},
		{X: splitX, Z: splitZ, W: (rect.X + rect.W) - splitX, D: (rect.Z + rect.D) - splitZ},
	}
	cells := make([]model.Rect, 4)
	for rank, s := range slots {
		cells[rank] = cellBySlot[s.idx]
	}
	return cells
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
