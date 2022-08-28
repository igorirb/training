/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let maxLen = 0;
    let start = 0;
    const map = new Map();
    for (let end = 0; end < s.length; end += 1) {
        const rightChar = s[end];
        if (!map.has(rightChar)) {
            map.set(rightChar, 0);
        }
        const currRightCharCount = map.get(rightChar);
        map.set(rightChar, currRightCharCount + 1);
        while (map.size > k) {
            let leftChar = s[start];
            const currLeftCharCount = map.get(leftChar);
            if (currLeftCharCount - 1 === 0) {
                map.delete(leftChar);
            } else {
                map.set(leftChar, currLeftCharCount - 1);
            }
            start += 1;
        }
        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
};