/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    const encodedStrings = [];
    for (let i = 0; i < strs.length; i += 1) {
        const str = strs[i];
        const strArray = str.split('');
        if (!strArray.length) {
            encodedStrings.push('');
        } else {
            const encodedString = [];
            for (let j = 0; j < strArray.length; j += 1) {
                const encodedLetter = [];
                const char = strArray[j].charCodeAt();
                if (!Number.isNaN(char)) {
                    for (let k = 0; k < char; k += 1) {
                        if (j % 2 === 0) {
                            encodedLetter.push('a');
                        } else {
                            encodedLetter.push('b');
                        }
                    }
                } else {
                    encodedLetter.push('y');
                }
                encodedString.push(encodedLetter.join(''));
            }
            encodedStrings.push(encodedString.join('c'));
        }
    }
    return encodedStrings.join('d');
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    if (!s.length) {
        return [''];
    }
    const encodedStrings = s.split('d');
    const decodedStrings = [];
    for (let i = 0; i < encodedStrings.length; i += 1) {
        const str = encodedStrings[i];
        if (!str.length) {
            decodedStrings.push('');
        } else {
            const strArray = str.split('c');
            const decodedStr = [];
            for (let j = 0; j < strArray.length; j += 1) {
                const charNum = strArray[j].length;
                decodedStr.push(String.fromCharCode(charNum));
            }
            decodedStrings.push(decodedStr.join(''));
        }
    }
    return decodedStrings;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */