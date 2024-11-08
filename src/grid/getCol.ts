export function getCol(index: number, maxColIndex: number) {
    const col = (index % maxColIndex) | 0
    // log('col',col)
    return col
}