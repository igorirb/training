/**
 * @param {number} n
 * @return {number}
 */
const countTwos = function(n, mapTwo) {
    let total = 0;
    if (n % 2 === 0) {
        total = countTwos(n / 2, mapTwo) + 1;
    }
    return total;
}
const countFives = function(n, mapFive) {
    let total = 0;
    if (n % 5 === 0) {
        total = countFives(n / 5, mapFive) + 1;
    }
    return total;
}
var trailingZeroes = function(n) {
    const mapTwo = {};
    const mapFive = {};
    let twos = 0;
    let fives = 0;
    for (let i = 1; i <= n; i += 1) {
        twos += countTwos(i, mapTwo);
        fives += countFives(i, mapFive);
    }
    return Math.min(twos, fives);
};