function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0]

    strs.forEach((_, i) => {
        let j = 0
        
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++
        }

        prefix = prefix.substring(0, j)
    })

    return prefix
}

const strings = ["flower", "flow", "flight"]
// const strings = ["dog", "racecar", "car"]
const result = longestCommonPrefix(strings)
console.log(result)
