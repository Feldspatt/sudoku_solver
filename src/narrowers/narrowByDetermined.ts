import {stats} from "../print/stats.ts";

export function narrowByDetermined(cluster: number[][]){
    let change = false
    const uniques = cluster.filter(cell => cell.length === 1)

    for (const unique of uniques){
        for (const cell of cluster) {
            if(cell === unique) continue
            const index = cell.indexOf(unique[0])
            if(index !== -1){
                cell.splice(index, 1)
                change = true
                stats.narrowedBasedOnDeterminedValues++
            }
        }
    }

    return change
}