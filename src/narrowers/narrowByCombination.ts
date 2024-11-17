import {stats} from "../print/stats.ts";

export function narrowByCombination(cells: number[][]){
    let changed = false
    const validCombinations = cells.map(()=> new Set<number>())

    let currentValues: number[] = []

    exploreRemaining(0, cells, currentValues, validCombinations)
    for (const [index, cell] of cells.entries()) {
        if(cell.length !== validCombinations[index].size){
            changed = true
            cell.length = 0
            cell.push(...validCombinations[index])
            stats.narrowedBasedonCombinations++
        }
    }
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
        for(const [index, value] of currentValues.entries()){
            validCombinations[index].add(value)
        }
        return true
    }
    for (const value of cells[cellIndex]){
        if(!currentValues.includes(value)) {
            currentValues.push(value)
            exploreRemaining(cellIndex +1, cells, currentValues, validCombinations)
            currentValues.pop()
        }
    }
}