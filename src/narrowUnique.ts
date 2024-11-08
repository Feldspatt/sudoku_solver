export function narrowUnique(cluster: number[][]){
    let change = false
    const uniques = cluster.filter(cell => cell.length === 1)

    for (const unique of uniques){
        for (const cell of cluster) {
            if(cell === unique) continue
            const index = cell.indexOf(unique[0])
            if(index !== -1){
                console.log(`removing ${unique[0]} from ${cell}`)
                cell.splice(index, 1)
                change = true
            }
        }
    }

    return change
}