/**
 * @param {character[][]} grid
 * @return {number}
 */
 function erase(grid, x, y) {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) return;
  if (grid[x][y] === '1') {
      grid[x][y] = '0';
      erase(grid, x - 1, y);
      erase(grid, x, y - 1);
      erase(grid, x + 1, y);
      erase(grid, x, y + 1);
  }
}
var numIslands = function(grid) {
  let total = 0;
  for (let i = 0; i < grid.length; i += 1) {
      for (let j = 0; j < grid[0].length; j += 1) {
          if (grid[i][j] === '1') {
              total += 1;
              erase(grid, i, j);
          }
      }
  }
  return total;
};