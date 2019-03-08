var groupAnagrams = function(strs) {
    let group = []
    let output = []
    strs.forEach(str => {
        if (group.length === 0) {
            const chars = str === '' ? [''] : str.split('').sort()
            group.push(chars)
            output.push([str])
        } else {
            let isSameGroup = false
            const sortedChar = str === '' ? [''] : str.split('').sort()
            for (let i = 0; i < group.length; i++) {
                if (sortedChar.length === group[i].length && group[i].every((char, j) => char === sortedChar[j])) {
                    isSameGroup = true
                    output[i].push(str)
                    break
                }
            }
            if (!isSameGroup) {
                group.push(sortedChar)
                output.push([str])
            }
        }
    })
    return output
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))