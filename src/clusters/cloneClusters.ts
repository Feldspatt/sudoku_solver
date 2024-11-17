import {makeCluster} from "./makeCluster.ts";
import {getCol} from "../coordinates/getCol.ts";
import {getRow} from "../coordinates/getRow.ts";
import {getSquare} from "../coordinates/getSquare.ts";
import {getSudokuValues} from "./getSudokuValues.ts";

export function cloneClusters(clusters: number[][][], modifiedCell: number[], value:number){
    const rows:number[][][] = makeCluster()
    const cols:number[][][] = makeCluster()
    const squares:number[][][] = makeCluster()

    for (const [index, cell] of getSudokuValues(clusters).entries()){
        const newCell = modifiedCell === cell ? [value] : [...cell]
        cols[getCol(index, 9)].push(newCell)
        rows[getRow(index, 9)].push(newCell)
        squares[getSquare(index, 9, 3)].push(newCell)
    }

    return [...rows, ...cols, ...squares]
}