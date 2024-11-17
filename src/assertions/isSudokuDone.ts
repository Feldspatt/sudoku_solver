export function isSudokuDone(sudoku: number[][]){
    return sudoku.every(cell => cell.length === 1)
}