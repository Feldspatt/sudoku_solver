import {buildClusters} from "./clusters/buildClusters.ts";
import {isRawSudokuValid} from "./assertions/isRawSudokuValid.ts";
import {sudokuToString} from "./print/sudokuToString.ts";
import {solve} from "./solve.ts";
import {getSudokuValues} from "./clusters/getSudokuValues.ts";
import {stats} from "./print/stats.ts";
import {AreClustersValid} from "./assertions/areClustersValid.ts";
import {statsToString} from "./print/statsToString.ts";

export function main(raw: (number|null)[]): number[][] {
    const startTime = Date.now()
    isRawSudokuValid(raw)
    const clusters = buildClusters(raw)

    console.log(`\nSolving following sudoku:
        ${sudokuToString(getSudokuValues(clusters))}
    `)

    const solvedClusters = solve(clusters)

    if(!solvedClusters) {
        console.error('No solution was found for this sudoku!')
        stats.state = 'impossible'
    }
    else if(!AreClustersValid(clusters)) {
        console.error('Solved sudoku is not valid!')
        stats.state = 'error'
    }
    else {
        console.info('Sudoku solved!')
        stats.state = 'done'
    }

    stats.timeSpent = Date.now() - startTime
    if(solvedClusters) {
        const sudoku = getSudokuValues(solvedClusters)
        console.log(`${sudokuToString(sudoku)}\n${statsToString(stats)}`)
        return sudoku
    } else throw("Could not solve sudoku")
}