package model

func ComputeStats(trace *Trace, filesInRepo int) Stats {
	state := map[string]string{}
	lastReadVersion := map[string]int{}
	editVersion := map[string]int{}
	readEvents := 0
	repeatedReads := 0
	errors := 0
	firstEdit := -1

	for _, event := range trace.Events {
		if event.IsError {
			errors++
		}
		for _, target := range event.Targets {
			if target.Path == "" {
				continue
			}
			prev := state[target.Path]
			if RankTouch(target.Touch) > RankTouch(prev) {
				state[target.Path] = target.Touch
			}
			if target.Touch == "edit" {
				editVersion[target.Path]++
			}
			if target.Touch == "read" {
				readEvents++
				if version, ok := lastReadVersion[target.Path]; ok && version == editVersion[target.Path] {
					repeatedReads++
				}
				lastReadVersion[target.Path] = editVersion[target.Path]
			}
			if target.Touch == "edit" && firstEdit == -1 {
				firstEdit = event.Seq
			}
		}
	}

	stats := Stats{FilesInRepo: filesInRepo}
	if firstEdit >= 0 {
		stats.EventsBeforeFirstEdit = firstEdit
	} else {
		stats.EventsBeforeFirstEdit = len(trace.Events)
	}

	for _, touch := range state {
		switch touch {
		case "edit":
			stats.Edited++
			stats.Fovea++
		case "read":
			stats.Fovea++
		case "hit":
			stats.Parafovea++
		}
	}
	if readEvents > 0 {
		stats.RegressionRate = float64(repeatedReads) / float64(readEvents)
	}
	if len(trace.Events) > 0 {
		stats.ErrorRate = float64(errors) / float64(len(trace.Events))
	}
	return stats
}

func RankTouch(touch string) int {
	switch touch {
	case "edit":
		return 3
	case "read":
		return 2
	case "hit":
		return 1
	default:
		return 0
	}
}
