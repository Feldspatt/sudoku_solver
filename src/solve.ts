import {narrowByDetermined} from "./narrowers/narrowByDetermined.ts";
import {narrowByCombination} from "./narrowers/narrowByCombination.ts";
import {isSudokuDone} from "./assertions/isSudokuDone.ts";
import {AreClustersValid} from "./assertions/areClustersValid.ts";
import {getSudokuValues} from "./clusters/getSudokuValues.ts";
import {makeHypothesis} from "./narrowers/makeHypothesis.ts";

export function solve(clusters: number[][][]): number[][][] | undefined {

    let isDone = false
    let change = true

    while (!isDone && change) {
        do {
            change = false
            for (const cluster of clusters) {
                if (narrowByDetermined(cluster)) change = true
            }
        } while (change)


        for (const cluster of clusters) {
            if (narrowByCombination(cluster)) {
                change = true
                break
            }
        }

        if(!change){
            if(!AreClustersValid(clusters)) throw new Error('invalid sudoku!!!')
            const found = makeHypothesis(clusters)
            if(found){
                clusters = found
            }
        }


        const sudoku = getSudokuValues(clusters)
        isDone = isSudokuDone(sudoku)
    }

    if(!AreClustersValid(clusters)) throw new Error('invalid sudoku!!!')

    return isDone? clusters : undefined
}