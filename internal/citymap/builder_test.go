package citymap

import (
	"encoding/json"
	"math"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"testing"

	"github.com/cosmtrek/mindwalk/internal/model"
)

func TestBuildIsDeterministic(t *testing.T) {
	root := t.TempDir()
	writeFile(t, root, "src/main.go", "package main\nfunc main() {}\n")
	writeFile(t, root, "README.md", "# Demo\n")
	runGit(t, root, "init")
	runGit(t, root, "add", ".")

	first, err := (Builder{}).Build(root, nil)
	if err != nil {
		t.Fatal(err)
	}
	second, err := (Builder{}).Build(root, nil)
	if err != nil {
		t.Fatal(err)
	}
	first.Repo.GeneratedAt = ""
	second.Repo.GeneratedAt = ""
	a, _ := json.Marshal(first)
	b, _ := json.Marshal(second)
	if string(a) != string(b) {
		t.Fatalf("citymap is not deterministic\nfirst=%s\nsecond=%s", a, b)
	}
	if len(first.Files) != 2 {
		t.Fatalf("files = %d", len(first.Files))
	}
	if first.Files[0].Rect.W <= 0 || first.Files[0].Rect.D <= 0 {
		t.Fatalf("empty rect: %#v", first.Files[0].Rect)
	}
}

func TestBuildIncludesUntrackedFiles(t *testing.T) {
	root := t.TempDir()
	writeFile(t, root, "tracked.go", "package main\n")
	runGit(t, root, "init")
	runGit(t, root, "add", "tracked.go")
	writeFile(t, root, "new.go", "package main\nfunc New() {}\n")

	city, err := (Builder{}).Build(root, nil)
	if err != nil {
		t.Fatal(err)
	}
	paths := map[string]bool{}
	for _, file := range city.Files {
		paths[file.Path] = true
	}
	if !paths["tracked.go"] || !paths["new.go"] {
		t.Fatalf("paths = %#v", paths)
	}
}

func TestBuildIsDeterministicAcrossNestedDirectories(t *testing.T) {
	root := t.TempDir()
	for d := 0; d < 12; d++ {
		for f := 0; f < 8; f++ {
			rel := filepath.Join("pkg", string(rune('a'+d)), "sub", string(rune('a'+f))+".go")
			writeFile(t, root, rel, strings.Repeat("package pkg\n", 1+d*f+f))
		}
	}
	runGit(t, root, "init")
	runGit(t, root, "add", ".")

	var first []byte
	for i := 0; i < 20; i++ {
		city, err := (Builder{}).Build(root, nil)
		if err != nil {
			t.Fatal(err)
		}
		city.Repo.GeneratedAt = ""
		data, _ := json.Marshal(city)
		if i == 0 {
			first = data
			continue
		}
		if string(data) != string(first) {
			t.Fatalf("citymap changed on run %d\nfirst=%s\ncurrent=%s", i, first, data)
		}
	}
}

func TestBuildSkipsWeakMissingTargetsButKeepsStrongGhosts(t *testing.T) {
	root := t.TempDir()
	writeFile(t, root, "tracked.go", "package main\n")
	runGit(t, root, "init")
	runGit(t, root, "add", "tracked.go")

	trace := &model.Trace{Events: []model.Event{{
		Targets: []model.Target{
			{Path: "missing-weak.go", Touch: "hit", Weak: true},
			{Path: "missing-strong.go", Touch: "edit"},
		},
	}}}
	city, err := (Builder{}).Build(root, trace)
	if err != nil {
		t.Fatal(err)
	}
	files := map[string]model.CityFile{}
	for _, file := range city.Files {
		files[file.Path] = file
	}
	if _, ok := files["missing-weak.go"]; ok {
		t.Fatalf("weak missing target became a city file: %#v", files["missing-weak.go"])
	}
	if file, ok := files["missing-strong.go"]; !ok || !file.Ghost {
		t.Fatalf("strong missing target did not become ghost: %#v", file)
	}
}

func TestLayoutKeepsBlocksNearSquare(t *testing.T) {
	root := t.TempDir()
	for i := 0; i < 80; i++ {
		writeFile(t, root, filepath.Join("pkg", "file"+string(rune('a'+i%26))+string(rune('a'+i/26))+".go"), "package pkg\nfunc X() {}\n")
	}
	runGit(t, root, "init")
	runGit(t, root, "add", ".")

	city, err := (Builder{}).Build(root, nil)
	if err != nil {
		t.Fatal(err)
	}
	maxRatio := 0.0
	for _, file := range city.Files {
		if file.Rect.W <= 0 || file.Rect.D <= 0 {
			t.Fatalf("empty rect for %s: %#v", file.Path, file.Rect)
		}
		ratio := math.Max(file.Rect.W/file.Rect.D, file.Rect.D/file.Rect.W)
		maxRatio = math.Max(maxRatio, ratio)
	}
	if maxRatio > 1.5+1e-6 {
		t.Fatalf("max aspect ratio = %f", maxRatio)
	}
}

// TestSmallDirsStayNearSquare pins the layout's other aspect-ratio backstop:
// with very few files (too few to fill a shelf row), the near-square bound
// must hold for both file footprints and the directory plates around them,
// not just for a crowded directory that naturally packs tightly.
func TestSmallDirsStayNearSquare(t *testing.T) {
	root := t.TempDir()
	writeFile(t, root, "pkg/two/a.go", "package two\n")
	writeFile(t, root, "pkg/two/b.go", "package two\nfunc B() {}\n")
	writeFile(t, root, "pkg/three/a.go", "package three\n")
	writeFile(t, root, "pkg/three/b.go", "package three\nfunc B() {}\n")
	writeFile(t, root, "pkg/three/c.go", "package three\nfunc C() {}\n")
	runGit(t, root, "init")
	runGit(t, root, "add", ".")

	city, err := (Builder{}).Build(root, nil)
	if err != nil {
		t.Fatal(err)
	}
	for _, file := range city.Files {
		if file.Rect.W <= 0 || file.Rect.D <= 0 {
			t.Fatalf("empty rect for %s: %#v", file.Path, file.Rect)
		}
		if ratio := math.Max(file.Rect.W/file.Rect.D, file.Rect.D/file.Rect.W); ratio > 1.5+1e-6 {
			t.Fatalf("file %s aspect ratio = %f", file.Path, ratio)
		}
	}
	for _, dir := range city.Dirs {
		if dir.Rect.W <= 0 || dir.Rect.D <= 0 {
			t.Fatalf("empty rect for dir %s: %#v", dir.Path, dir.Rect)
		}
		if ratio := math.Max(dir.Rect.W/dir.Rect.D, dir.Rect.D/dir.Rect.W); ratio > 1.5+1e-6 {
			t.Fatalf("dir %s aspect ratio = %f", dir.Path, ratio)
		}
	}
}

func TestLargeTextFileCountsLines(t *testing.T) {
	root := t.TempDir()
	const lines = 700000
	writeFile(t, root, "big.go", strings.Repeat("package main\n", lines))

	city, err := (Builder{}).Build(root, nil)
	if err != nil {
		t.Fatal(err)
	}
	if len(city.Files) != 1 {
		t.Fatalf("files = %#v", city.Files)
	}
	if city.Files[0].Lines != lines {
		t.Fatalf("lines = %d, want %d", city.Files[0].Lines, lines)
	}
}

// TestBuildNeutralizesRepoFsmonitorExec proves that inspecting an untrusted
// repository does not execute a program named by that repo's local
// core.fsmonitor config. git runs the fsmonitor hook during the index refresh
// triggered by status/ls-files, so a hostile .git/config would otherwise be a
// code-execution vector when mindwalk builds a citymap for a repo the user did
// not create. The test is differential: it first confirms the vector is live on
// this host (skipping if git does not invoke fsmonitor here) and then asserts
// Build does not fire it.
func TestBuildNeutralizesRepoFsmonitorExec(t *testing.T) {
	if runtime.GOOS == "windows" {
		t.Skip("uses a POSIX fsmonitor hook script")
	}
	root := t.TempDir()
	writeFile(t, root, "main.go", "package main\n")
	runGit(t, root, "init")
	runGit(t, root, "config", "user.email", "t@example.com")
	runGit(t, root, "config", "user.name", "test")
	runGit(t, root, "add", ".")
	runGit(t, root, "commit", "-m", "init")

	sentinel := filepath.Join(t.TempDir(), "pwned")
	hook := filepath.Join(root, "fsmonitor.sh")
	if err := os.WriteFile(hook, []byte("#!/bin/sh\ntouch "+sentinel+"\n"), 0o755); err != nil {
		t.Fatal(err)
	}
	runGit(t, root, "config", "core.fsmonitor", hook)

	// Positive control: a raw git command honoring the repo config runs the
	// hook. Ignore git's exit status; the hook's side effect is what matters.
	_ = exec.Command("git", "-C", root, "status", "--porcelain").Run()
	if _, err := os.Stat(sentinel); err != nil {
		t.Skipf("git on this host did not invoke core.fsmonitor; cannot assert the fix")
	}
	if err := os.Remove(sentinel); err != nil {
		t.Fatal(err)
	}

	// mindwalk's hardened git calls must not run the hook.
	if _, err := (Builder{}).Build(root, nil); err != nil {
		t.Fatal(err)
	}
	if _, err := os.Stat(sentinel); err == nil {
		t.Fatalf("core.fsmonitor program executed through Build despite hardening")
	}
}

// TestFileWeightLogSizing pins the terrain-view sizing: rectangle area is
// proportional to fileWeight, so a multi-megabyte file must not dwarf the
// kilobyte source files, and a huge line count must not drive area on its own.
func TestFileWeightLogSizing(t *testing.T) {
	source := fileWeight(model.CityFile{Bytes: 6 * 1024, Lines: 200})
	huge := fileWeight(model.CityFile{Bytes: 4 * 1024 * 1024, Lines: 1})
	if huge <= source {
		t.Fatalf("bigger file should still be bigger: huge=%v source=%v", huge, source)
	}
	if ratio := huge / source; ratio > 2 {
		t.Fatalf("area ratio %.2f too large; log10 sizing should keep a 4MB file near source files", ratio)
	}

	// Weight depends on bytes, not line count: a generated lockfile with tens of
	// thousands of lines but modest bytes once dominated via sqrt(max(lines,…)).
	few := fileWeight(model.CityFile{Bytes: 8 * 1024, Lines: 5})
	many := fileWeight(model.CityFile{Bytes: 8 * 1024, Lines: 60000})
	if few != many {
		t.Fatalf("weight should ignore line count: few=%v many=%v", few, many)
	}
}

func writeFile(t *testing.T, root, rel, content string) {
	t.Helper()
	path := filepath.Join(root, filepath.FromSlash(rel))
	if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
		t.Fatal(err)
	}
}

func runGit(t *testing.T, root string, args ...string) {
	t.Helper()
	cmd := exec.Command("git", args...)
	cmd.Dir = root
	if out, err := cmd.CombinedOutput(); err != nil {
		t.Fatalf("git %v: %v\n%s", args, err, out)
	}
}
