var isMatch = function(s, p) {
    if (p.length < s.length) return false
    let isStart = false
    let isMatch = true
    let pi = 0
    for (let i = 0; i < s.length; i++){
        let notMatch = true
        while (notMatch && pi < p.length) {
            console.log(p[pi])
            if (p[pi] !== s[i] && p[pi] !== '.') {
                console.log((pi > 0 && p[pi - 1] !== s[i] && p[pi - 1] !== '.'))
                if (p[pi] === '*' && ((pi > 0 && p[pi - 1] !== s[i] && p[pi - 1] !== '.') || (isStart && p[pi + 1] !== s[i] && p[pi + 1] !== '.'))) {
                    if (pi > p.length - 1) isMatch = false
                } else notMatch = false
            } else notMatch = false
            if (i === s.length - 1) notMatch = false
            else pi++
        }
        isStart = true
    }
    return isMatch ? pi >= p.length : false
}

console.log(isMatch('ab', '.*c'))