/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const pow = function(x, n, map) {
    const key = `${x}#${n}`;
    if (map.get(key)) {
        return map.get(key);
    }

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
    const left = pow(x, power, map);
    const right = pow(x, n - power, map);
    const result = left * right;
    map.set(key, result);
    return result;
}
var myPow = function(x, n) {
    const map = new Map();
    return pow(x, n, map);
};
