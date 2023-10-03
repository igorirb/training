/**
 * @param {number[][]} grid
 * @return {number}
 */
function countMoves (grid, currMoves) {
  let iZero, jZero;
  let iOver, jOver;
  for (let i = 0; i < grid.length; i += 1) {
    if (
      iZero !== undefined
      && jZero !== undefined
      && iOver !== undefined
      && jOver !== undefined
    ) break;
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === 0) {
        iZero = i;
        jZero = j;
      } else if (grid[i][j] > 1) {
        iOver = i;
        jOver = j;
      }
    }
  }
  if (
    iZero === undefined
    && jZero === undefined
    && iOver === undefined
    && jOver === undefined
  ) return currMoves;
  grid[iZero][jZero] += 1;
  grid[iOver][jOver] -= 1;
  return countMoves(grid, currMoves + Math.abs(iZero - iOver) + Math.abs(jZero - jOver));
}
var minimumMoves = function(grid) {
  return countMoves(grid, 0);
};