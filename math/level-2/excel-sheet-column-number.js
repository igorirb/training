/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pos = 0;
    const len = columnTitle.length;
    for (let i = 0; i < len; i += 1) {
        const curPos = alphabet.indexOf(columnTitle[i]) + 1;
        pos += curPos * Math.pow(alphabet.length, len - i - 1);
    }
    return pos;
};