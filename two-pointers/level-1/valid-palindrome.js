/**
 * @param {string} s
 * @return {boolean}
 */
function isNum(code) {
    if (code >= '0'.charCodeAt() && code <= '9'.charCodeAt()) {
        return true;
    }
    return false;
}
function isUpperCaseLetter(code) {
    if (code >= 'A'.charCodeAt() && code <= 'Z'.charCodeAt()) {
        return true;
    }
    return false;
}
function isLowerCaseLetter(code) {
    if (code >= 'a'.charCodeAt() && code <= 'z'.charCodeAt()) {
        return true;
    }
    return false;
}
function lowerToUpperCase(lowerCaseCode) {
    const diff = 'a'.charCodeAt() - 'A'.charCodeAt();
    return String.fromCharCode(lowerCaseCode - diff);
}
var isPalindrome = function(s) {
    const sArray = s.split('');
    if (sArray.length <= 1) return true;
    const parsedArray = [];
    for (let i = 0; i < sArray.length; i += 1) {
        const code = sArray[i].charCodeAt();
        if (isNum(code) || isUpperCaseLetter(code)) {
            parsedArray.push(sArray[i]);
        } else if (isLowerCaseLetter(code)) {
            parsedArray.push(lowerToUpperCase(code));
        }
    }
    let i = 0, j = parsedArray.length - 1;
    while (i < j ) {
        if (parsedArray[i] !== parsedArray[j]) {
            return false;
        }
        i += 1;
        j -= 1;
    }
    return true;
};