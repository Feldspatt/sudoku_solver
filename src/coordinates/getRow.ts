export function getRow(index: number, maxColIndex: number) {
    return (index / maxColIndex) | 0
}