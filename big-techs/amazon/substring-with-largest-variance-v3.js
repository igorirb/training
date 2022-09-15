/**
 * @param {string} s
 * @return {number}
 */
const findMaxDeviation = function(s, map) {
    if (map[s]) {
        return map[s];
    }
    const reduce = s.split('').reduce((acc, c) => {
        if (!acc[c]) {
            acc[c] = 1;
        } else {
            acc[c] += 1;
        }
        return acc;
    }, {});
    const freqs = Object.values(reduce);
    map[s] = Math.max(...freqs) - Math.min(...freqs);
    return map[s];
}
var largestVariance = function(s) {
    let currMax = 0;
    const devMap = {};
    const len = s.length;
    for (let i = 0; i < len; i += 1) {
        for (let j = 0; j < len - i; j += 1) {
            const sub = s.substring(i, len - j);
            const max = findMaxDeviation(sub, devMap);
            currMax = Math.max(currMax, max);
        }
    }
    return currMax;
};