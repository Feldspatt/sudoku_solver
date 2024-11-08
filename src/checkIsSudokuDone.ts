export function checkIsSudokuDone(sudoku: number[][]){
    return sudoku.every(cell => cell.length === 1)
}