// KADANE ALGORITHM #1
// WRONG ANSWER
/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
    const sLen = s.length;
    const sArr = s.split('');
    const letters = Object.keys(sArr.reduce((acc, val) => {
        if (!acc[val]) {
            acc[val] = 1;
        }
        return acc;
    }, {}));
    let max = 0;
    for (let i = 0; i < letters.length; i += 1) {
        const a = letters[i];
        for (let j = 0; j < letters.length; j += 1) {
            const b = letters[j];
            if (a !== b) {
                let currMax = 0;
                let aCount = 0;
                let bCount = 0;
                let add = 0;
                for (let k = 0; k < sLen; k += 1) {
                    if (sArr[k] === a) {
                        if (currMax < 0) {
                            const substr = s.substring(k, sLen);
                            // console.log(substr);
                            if (substr.indexOf(b) >= 0) {
                                currMax = 0;
                                aCount = 0;
                                bCount = 0;
                            } else {
                                bCount = 1;
                            }
                        }
                        aCount += 1;
                    }
                    else if (sArr[k] === b) {
                        bCount += 1;
                    }
                    currMax = Math.max(-1, aCount - bCount);
                    if (aCount > 0 && bCount > 0) {
                        max = Math.max(max, currMax);
                    }
                    if (s.indexOf(a) >= 0 && s.indexOf(b) >= 0) {
                        console.log(k, a, b, sArr[k], aCount, bCount, currMax, max);
                    }
                }
            }
        }
    }
    return max;
};