/**
 * @param {string} s
 * @return {string}
 */
const isPalindromic = function (str, start, end) {
    let resp = true;
    for (let i = start; i < (start + end) / 2; i += 1) {
        if (str[i] !== str[end - (i - start)]) {
            resp = false;
            break;
        }
    }
    return resp;
}
const iteration = function (str, leftPos) {
    let maxSize = 0;
    let maxRight = leftPos;
    let currPos = leftPos;
    while (currPos < str.length) {
        if (isPalindromic(str, leftPos, currPos)) {
            if (maxSize < currPos - leftPos + 1) {
                maxSize = currPos - leftPos + 1;
                maxRight = currPos;
            }
        }
        currPos += 1;
    }
    return { maxSize, leftPos, maxRight };
}
var longestPalindrome = function(s) {
    let size = 0;
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; i += 1) {
        const { maxSize, leftPos, maxRight } = iteration(s, i);
        if (maxSize > size) {
            size = maxSize;
            left = leftPos;
            right = maxRight;
        }
    }
    return s.substr(left, size);
};