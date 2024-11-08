export function getRow(index: number, maxColIndex: number) {
    const row = (index / maxColIndex) | 0
    // log('row',row)
    return row
}