// WRONG ANSWER
/**
 * @param {string} s
 * @return {number}
 */
const findMaxDeviation = function(s) {
    const reduce = s.split('').reduce((acc, c) => {
        if (!acc[c]) {
            acc[c] = 1;
        } else {
            acc[c] += 1;
        }
        return acc;
    }, {});
    const freqs = Object.values(reduce);
    return Math.max(...freqs) - Math.min(...freqs);
}
var largestVariance = function(s) {
    let max = 0;
    const len = s.length;
    for (let i = 0; i < len; i += 1) {
        if(len - i < max) break;
        const sub1 = s.substring(i, len);
        const sub2 = s.substring(0, len - i);
        const max1 = findMaxDeviation(sub1);
        const max2 = findMaxDeviation(sub2);
        max = Math.max(max, max1, max2);
    }
    return max;
};