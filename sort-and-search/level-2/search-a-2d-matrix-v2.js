/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchCol (matrix, target, min, max, row) {
    if (max < min) return false;
    const mid = Math.floor((min + max) / 2);
    // console.log('col', min, max, row);
    // console.log('col', matrix[row][min], matrix[row][max], matrix[row][mid]);
    if (
        matrix[row][min] === target
        || matrix[row][max] === target
        || matrix[row][mid] === target
    ) {
        return true;
    }
    let result;
    if (matrix[row][mid] > target) {
        result = searchCol(matrix, target, min, mid - 1, row);
    } else {
        result = searchCol(matrix, target, mid + 1, max, row);
    }
    if (result) {
        return true;
    }
    return false;
}
function searchRow (matrix, target, min, max, col) {
    if (max < min) return false;
    const mid = Math.floor((min + max) / 2);
    // console.log('row', min, max, col);
    // console.log('row', matrix[min][col], matrix[max][col], matrix[mid][col]);
    if (
        matrix[min][col] === target
        || matrix[max][col] === target
        || matrix[mid][col] === target
    ) {
        return true;
    }
    let result;
    if (matrix[mid][col] > target) {
        result = searchRow(matrix, target, min, mid - 1, col);
    } else {
        result = searchRow(matrix, target, mid + 1, max, col);
    }
    if (result) {
        return true;
    }
    for (let i = min; i <= mid; i += 1) {
        result = searchCol(matrix, target, 0, matrix[0].length - 1, i);
        if (result) {
            return true;
        }
    }
    return false;
}
var searchMatrix = function(matrix, target) {
    return searchRow(
        matrix,
        target,
        0,
        matrix.length - 1,
        0
    );
};