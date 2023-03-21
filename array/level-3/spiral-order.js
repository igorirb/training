/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let leftBound = 0;
    let rightBound = matrix[0].length;
    let topBound = 0;
    let bottomBound = matrix.length;
    let hDir = 0; // 0 = right; 1 = left
    let vDir = 0; // 0 = down; 1 = up
    
    // start at position (0,0)
    let i = leftBound;
    let j = topBound;
    const output = [];
    while (
        leftBound !== rightBound
        && topBound !== bottomBound
    ) {
        if (hDir === 0) {
            while (j < rightBound) {
                output.push(matrix[i][j]);
                j += 1;
            }
            topBound += 1;
            j -= 1;
            i += 1;
            while (i < bottomBound) {
                output.push(matrix[i][j]);
                i += 1;
            }
            rightBound -= 1;
            i -= 1;
            j -= 1;
            hDir = 1;
        } else {
            while (j >= leftBound) {
                output.push(matrix[i][j]);
                j -= 1;
            }
            bottomBound -= 1;
            j += 1;
            i -= 1;
            while (i >= topBound) {
                output.push(matrix[i][j]);
                i -= 1;
            }
            leftBound += 1;
            i += 1;
            j += 1;
            hDir = 0;
        }
    }
    return output;
};