/**
 * This solution exceeds time limit
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const checkValidPath = function(m, n, x, y) {
  if (x === m && y === n) return 1;
  if (x > m || y > n) return 0;
  const r1 = checkValidPath(m, n, x + 1, y);
  const r2 = checkValidPath(m, n, x, y + 1);
  return r1 + r2;
}
var uniquePaths = function(m, n) {
  return checkValidPath(m - 1, n - 1, 0, 0);
};