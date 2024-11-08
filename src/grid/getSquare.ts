import {getCol} from "./getCol.ts";
import {getRow} from "./getRow.ts";

export function getSquare(index: number, maxColIndex: number, maxSquareIndex: number) {
    const squareCol = getCol(index, maxColIndex) / maxSquareIndex | 0
    const squareRow = getRow(index, maxColIndex) / maxSquareIndex | 0
    return squareRow * maxSquareIndex + squareCol
}