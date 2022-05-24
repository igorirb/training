/**
 * @param {string} s
 * @return {number}
 */
const iteration = function (str, position, letters) {
    let size = 1;
    while (position < str.length) {
        if (letters.get(str[position]) != 1) {
            letters.set(str[position], 1);
            size += 1;
        } else {
            position = str.length;
        }
        position += 1;
    }
    return size;
}
var lengthOfLongestSubstring = function(s) {
    let size = 0;
    for (let i = 0; i < s.length; i += 1) {
        const letters = new Map();
        letters.set(s[i], 1);
        const tempSize = iteration(s, i + 1, letters);
        if (tempSize > size) {
            size = tempSize;
        }
    }
    return size;
};