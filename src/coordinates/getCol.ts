export function getCol(index: number, maxColIndex: number) {
    return (index % maxColIndex) | 0
}