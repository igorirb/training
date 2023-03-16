/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (Math.abs(x) === 1) {
        if (n % 2 === 0) {
            return 1;
        }
        return x;
    }
    let res = 1;
    let pow = Math.abs(n);
    for (let i = 0; i < pow; i += 1) {
        res *= x;
    }
    if (n < 0) {
        res = 1 / res;
    }
    return res;
};