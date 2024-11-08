import {makeCluster} from "./makeCluster.ts";
import {getCol} from "./grid/getCol.ts";
import {getRow} from "./grid/getRow.ts";
import {getSquare} from "./grid/getSquare.ts";
import {digits} from "./digits.ts";
import {getSudoku} from "./getSudoku.ts";

export function cloneClusters(clusters: number[][][], modifiedCell: number[]){
    const rows:number[][][] = digits.map(()=> [])
    const cols:number[][][] = makeCluster()
    const squares:number[][][] = makeCluster()

    console.log('cells length: ' + clusters.flat().length)
    for (const [index, cell] of getSudoku(clusters).entries()){
        console.log(`index: ${index}`)
        const newCell = modifiedCell === cell ? [modifiedCell[0]] : [...cell]
        cols[getCol(index, 9)].push(newCell)
        rows[getRow(index, 9)].push(newCell)
        squares[getSquare(index, 9, 3)].push(newCell)
    }



    return [...rows, ...cols, ...squares]
}