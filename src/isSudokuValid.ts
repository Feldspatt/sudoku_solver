import {getSudoku} from "./getSudoku.ts";

export function isSudokuValid(clusters: number[][][]){
    const sudoku = getSudoku(clusters)

    for (const cluster of clusters){
        const uniques = cluster.filter(cell => cell.length === 1)

        for (const cell of cluster){
            const unique = uniques.find( unique => unique !== cell && cell.includes(unique[0]))
            if(unique) throw new Error(`Found too many ${unique[0]} to be a valid sudoku, cluster: ${cluster.map(cell => `\n${cell}`)}`)
        }
    }

    if((sudoku.length !== 81)) throw new Error(`invalid sudoku length: ${sudoku.length}, sudoku: ${sudoku.map(cell => `\n${cell}`)}`)
    if(!sudoku.every(cell => cell.length > 0)) throw new Error(`invalid cell length: ${sudoku}`)

    return true
}