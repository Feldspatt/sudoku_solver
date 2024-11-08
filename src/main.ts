import {buildSudoku} from "./buildSudoku.ts";
import {checkisRawSudokuValid} from "./checkisRawSudokuValid.ts";
import {sudokuDifficile} from "../sample/sudokuDifficile.ts";
import {printSudoku} from "./printSudoku.ts";
import {solve} from "./solve.ts";
import {getSudoku} from "./getSudoku.ts";

function main(raw: (number|null)[]){
    const startTime = Date.now()
    checkisRawSudokuValid(raw)
    const clusters = buildSudoku(raw)

    printSudoku(getSudoku(clusters))
    const solvedClusters = solve(clusters)

    console.log('\nelapsed time: ' + (Date.now() - startTime) + 'ms')
    if(solvedClusters) {
        printSudoku(getSudoku(solvedClusters))
    }
}

main(sudokuDifficile)