/**
 * @param {number} n
 * @return {boolean}
 */
const checkHappiness = function(n, map) {
    if (map[n] !== undefined) return false;
    if (n === 1) return true;
    let sum = 0;
    let next = n;
    do {
        let digit = next % 10;
        sum += digit * digit;
        next = Math.floor(next / 10);
    } while (next !== 0);
    map[n] = sum;
    const res = checkHappiness(sum, map);
    return res;
}
var isHappy = function(n) {
    const map = {};
    return checkHappiness(n, map);
};