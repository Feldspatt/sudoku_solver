import {solve} from "../solve.ts";
import {cloneClusters} from "../clusters/cloneClusters.ts";
import {stats} from "../print/stats.ts";

export function makeHypothesis(clusters: number[][][]){
    for (const cell of clusters.flat().filter(cell=> cell.length > 1)) {
        for (const value of cell){
            stats.hypothesisMade++
            const newClusters = cloneClusters(clusters, cell, value);

            try {
                const sudoku = solve(newClusters)
                if(sudoku) return sudoku
            } catch(error){
                console.log('supposition was wrong!')
            }
        }
    }
}