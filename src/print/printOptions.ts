/**
 * Helper to visualize each cell possibility
 * @param sudoku
 */
export function printOptions(sudoku: number[][]) {
    const maxLength = sudoku.reduce((acc, curr) => {
        return Math.max(acc, curr.length)
    }, 0)
    console.log(sudoku.map((cell, index) => {
        const newLine = (index % 9 === 0) ? '\n' : ''
        const pipe = '|'
        const value = cell.join('').padStart(maxLength)
        return newLine + pipe + value
    }).join(''))
}