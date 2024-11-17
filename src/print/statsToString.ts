export function statsToString(stats: Stats) {
    return `narrowing by adjacent unique values: ${(stats.narrowedBasedOnDeterminedValues)}
narrowing by adjacent combinations: ${(stats.narrowedBasedonCombinations)}
hypothesis made: ${(stats.hypothesisMade)}
elapsed time: ${stats.timeSpent} ms`
}