/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// matrix = [
//    [1,4,7,11,15],
//    [2,5,8,12,19],
//    [3,6,9,16,22],
//    [10,13,14,17,24],
//    [18,21,23,26,30]
// ]
// target = 5
function searchPos (matrix, i, j, target) {
    if (i >= matrix.length || j >= matrix[0].length) return false;
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] > target) return false;
    const nextRow = Math.round((i + matrix.length) / 2);
    const down = searchPos(matrix, nextRow, j, target);
    if (down) return true;
    const nextCol = Math.round((j + matrix[0].length) / 2);
    const right = searchPos(matrix, i, j + 1, target);
    if (right) return true;
    return false;
}
var searchMatrix = function(matrix, target) {
    return searchPos(matrix, 0, 0, target);
};