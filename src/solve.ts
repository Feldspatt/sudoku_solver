import {narrowUnique} from "./narrowUnique.ts";
import {narrowCluster} from "./narrowCluster.ts";
import {checkIsSudokuDone} from "./checkIsSudokuDone.ts";
import {printOptions} from "./printSudoku.ts";
import {isSudokuValid} from "./isSudokuValid.ts";
import {getSudoku} from "./getSudoku.ts";
import {suppose} from "./suppose.ts";

export function solve(clusters: number[][][]): number[][][] | undefined {

    console.log('solving: ')
    printOptions(getSudoku(clusters))

    let isDone = false
    let change = true

    while (!isDone && change) {
        console.log('narrowing by unique')
        do {
            change = false
            for (const cluster of clusters) {
                if (narrowUnique(cluster)) change = true
            }
        } while (change)


        console.log('narrowing by cluster')
        for (const cluster of clusters) {
            if (narrowCluster(cluster)) {
                change = true
                break
            }
        }

        if(!change){
            console.log('making hypothesis')
            if(!isSudokuValid(clusters)) throw new Error('invalid sudoku!!!')
            const found = suppose(clusters)
            if(found){
                clusters = found
            }
        }


        const sudoku = getSudoku(clusters)
        isDone = checkIsSudokuDone(sudoku)
        printOptions(sudoku)
    }

    if(!isSudokuValid(clusters)) throw new Error('invalid sudoku!!!')

    return isDone? clusters : undefined
}