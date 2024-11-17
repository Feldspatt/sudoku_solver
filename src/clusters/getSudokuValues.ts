export function getSudokuValues(clusters: number[][][]){
    return clusters.slice(0,9).flat()
}