export function sudokuToString(sudoku: number[][]) {
    return sudoku.map((cell, index) => {
        const newLine = (index % 9 === 0) ? '\n' : ''
        const pipe = '|'
        const value = cell.length === 1? cell[0] : ' '
        return newLine + pipe + value
    }).join('')
}

