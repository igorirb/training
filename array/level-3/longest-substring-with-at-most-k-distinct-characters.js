/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0) {
        return 0;
    }
    const letters = {};
    let currTotal = 0;
    let start = 0;
    let maxLen = 0;
    for (let i = 0; i < s.length; i += 1) {
        const curr = s[i];
        if (letters[curr] === undefined)  {
            letters[curr] = 0;
        }
        if (letters[curr] === 0) {
            currTotal += 1;
        }
        letters[curr] += 1;
        while (currTotal > k) {
            const currRem = s[start];
            letters[currRem] -= 1;
            if (letters[currRem] === 0) {
                currTotal -= 1;
            }
            start += 1;
        }
        let curLen = i - start + 1;
        if (curLen > maxLen) {
            maxLen = curLen;
        }
    }
    return maxLen;
};