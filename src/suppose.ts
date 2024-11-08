import {solve} from "./solve.ts";
import {cloneClusters} from "./cloneClusters.ts";

export function suppose(clusters: number[][][]){
    for (const cell of clusters.flat().filter(cell=> cell.length > 1)) {
        for (const value of cell){
        // for (const value of cell.reverse()){
            console.log(`old: ${cell}, hypothesis: ${value}`)

            const newClusters = cloneClusters(clusters, cell);

            try {
                const sudoku = solve(newClusters)
                if(sudoku) {
                    console.log('matching sudoku!')
                    return sudoku
                }
            } catch(error){
                console.log('supposition was wrong!')
            }
        }
    }
}