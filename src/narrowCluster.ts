export function narrowCluster(cells: number[][]){
    let changed = false
    const validCombinations = cells.map(()=> new Set<number>())

    let currentValues: number[] = []

    exploreRemaining(0, cells, currentValues, validCombinations)

    for (const [index, cell] of cells.entries()) {
        if(cell.length !== validCombinations[index].size){
            changed = true
            cell.length = 0
            cell.push(...validCombinations[index])
            console.log('narrowed cluster cell')
        }
    }

    // log(`output:${cells.map(cell => `\n${cell}`)}`)
    return changed
}

/**
 *
 * @param cellIndex
 * @param cells
 * @param currentValues
 * @param validCombinations
 */
function exploreRemaining(
    cellIndex: number,
    cells: number[][],
    currentValues: number[],
    validCombinations: Set<number>[]) {
    if(cells.length === cellIndex) {
        // reached end of cells, combination is valid
        for(const [index, value] of currentValues.entries()){
            // log(`combination to add: ${index}, ${value}`)
            validCombinations[index].add(value)
        }
        // log(`found valid combination: ${currentValues}`)
        return true
    }
    for (const [index, value] of cells[cellIndex].entries()){
        // log(`cell: ${cellIndex}, value index: ${index}, current values`)
        if(!currentValues.includes(value)) {
            // log(`digging: value ${value} not found in ${currentValues}.`)
            currentValues.push(value)
            exploreRemaining(cellIndex +1, cells, currentValues, validCombinations)
            currentValues.pop()
        } else {
            // log(`pruning: value ${value} found in ${currentValues}.`)
        }
    }
}