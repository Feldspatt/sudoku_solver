import {getCol} from "./grid/getCol.ts";
import {getRow} from "./grid/getRow.ts";
import {getSquare} from "./grid/getSquare.ts";
import {digits} from "./digits.ts";
import {makeCluster} from "./makeCluster.ts";

export function buildSudoku(raw: (number | null)[]) {
    const rows: number[][][] = makeCluster()
    const cols: number[][][] = makeCluster()
    const squares: number[][][] = makeCluster()

    raw.map((data, index) => {
        const cell: number[] = data? [data] : [...digits]

        cols[getCol(index, 9)].push(cell)
        rows[getRow(index, 9)].push(cell)
        squares[getSquare(index, 9, 3)].push(cell)

        return cell
    })

    return [...rows, ...cols, ...squares]
}

