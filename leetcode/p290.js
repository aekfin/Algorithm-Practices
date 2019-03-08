var wordPattern = function(pattern, str) {
    pattern = pattern.split('')
    str = str.split(' ')
    if (pattern.length !== str.length) {
        return false
    } else {
        let wordsPattern = {}
        let wordsStr = {}
        for (let i = 0; i < pattern.length;i++) {
            if (wordsPattern[pattern[i]]) wordsPattern[pattern[i]].push(i)
            else wordsPattern[pattern[i]] = []
            if (wordsStr[str[i]]) wordsStr[str[i]].push(i)
            else wordsStr[str[i]] = []
        }
        wordsPattern = Object.values(wordsPattern)
        wordsStr = Object.values(wordsStr)
        return wordsPattern.length === wordsStr.length && wordsPattern.every((e, i) => e.length === wordsStr[i].length)
    }
}

console.log(wordPattern('aba', 'dog cat cat'))