/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n < 0) {
        x = 1 / x;
        n = -1 * n;
    }

    if (n === 0) return 1;
    if (n === 1) return x;

    let power;
    if (n % 2 === 0) {
        power = n / 2;
    } else {
        power = (n + 1) / 2;
    }
    return myPow(x, power) * myPow(x, n - power);
};
