/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function factorial (num) {
    let rval = 1;
    for (let i = 2; i <= num; i += 1) {
        rval = rval * i;
    }
    return rval;
}
var uniquePaths = function(m, n) {
    return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
};