/**
 * This solution is O(mn)
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const hasVal = function (arr, val) {
  return arr.findIndex(x => x === val) !== -1;
}
var setZeroes = function(matrix) {
  const rows = [];
  const columns = [];
  const rowSize = matrix.length;
  const columnsSize = matrix[0].length;
  for (let i = 0; i < rowSize; i += 1) {
      for (let j = 0; j < columnsSize; j += 1) {
          if (matrix[i][j] === 0) {
              rows.push(i);
              columns.push(j);
          }
      }
  }
  for (let i = 0; i < rowSize; i += 1) {
      for (let j = 0; j < columnsSize; j += 1) {
          if (hasVal(rows, i) || hasVal(columns, j)) {
              matrix[i][j] = 0;
          }
      }
  }
  return matrix;
};