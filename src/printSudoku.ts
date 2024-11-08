// export function printSudoku(sudoku: Cell[]) {
//     log(sudoku.map((cell, index) => {
//         const newLine = (index % 9 === 0) ? '\n' : ''
//         const pipe = '|'
//         const value = cell.value ?? ' '
//         return newLine + pipe + value
//     }).join(''))
// }

import {log} from "./log.ts";

export function printSudoku(sudoku: number[][]) {
    log(sudoku.map((cell, index) => {
        const newLine = (index % 9 === 0) ? '\n' : ''
        const pipe = '|'
        const value = cell.length === 1? cell[0] : ' '
        return newLine + pipe + value
    }).join(''))
}

export function printOptions(sudoku: number[][]) {
    const maxLength = sudoku.reduce((acc, curr)=> {
        return Math.max(acc, curr.length)
    }, 0)
    log(sudoku.map((cell, index) => {
        const newLine = (index % 9 === 0) ? '\n' : ''
        const pipe = '|'
        const value = cell.join('').padStart(maxLength)
        return newLine + pipe + value
    }).join(''))
}