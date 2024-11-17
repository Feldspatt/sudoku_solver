type Stats = {
    narrowedBasedOnDeterminedValues: number,
    narrowedBasedonCombinations: number,
    hypothesisMade: number,
    timeSpent: number,
    state: 'impossible' | 'error' | 'done' | 'not set'
}