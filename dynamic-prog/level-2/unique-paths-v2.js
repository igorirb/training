/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const map = {};
const checkValidPath = function(m, n) {
    if (map[`${m}-${n}`] !== undefined) return map[`${m}-${n}`];
    if (m < 1 || n < 1) return 0;
    if (m === 1 || n === 1) return 1;
    // if robot goes down, now we have to solve
    // the same problem for (m-1) x n grid
    const down = checkValidPath(m - 1, n);
    // if robot goes right, now we have to solve
    // the same problem for m x (n-1) grid
    const right = checkValidPath(m, n - 1);
    // the answer will be the sum of both solutions
    map[`${m}-${n}`] = down + right
    return map[`${m}-${n}`];
}
var uniquePaths = function(m, n) {
    return checkValidPath(m, n);
};