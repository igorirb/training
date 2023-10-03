/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const columns = [];
    const rows = [];
    const subBoxes = new Map();
    for (let i = 0; i < board.length; i += 1) {
        if (!rows[i]) {
            rows[i] = new Set();
        }
        for (let j = 0; j < board[i].length; j += 1) {
            // create set for column
            if (!columns[j]) {
                columns[j] = new Set();
            }

            if (board[i][j] !== '.') {            
                // check & add numbers
                if (rows[i].has(board[i][j])) return false;
                else rows[i].add(board[i][j]);
                if (columns[j].has(board[i][j])) return false;
                else columns[j].add(board[i][j]);

                // create set for sub-boxes
                // 00, 03, 06
                // 30, 33, 36
                // 60, 63, 66
                const iBoxIndex = i - i % 3;
                const jBoxIndex = j - j % 3;
                if (!subBoxes.has(`${iBoxIndex}${jBoxIndex}`)) {
                    subBoxes.set(`${iBoxIndex}${jBoxIndex}`, new Set());
                }
                // check & add numbers on subboxes set
                if (subBoxes.get(`${iBoxIndex}${jBoxIndex}`).has(board[i][j])) return false;
                else subBoxes.get(`${iBoxIndex}${jBoxIndex}`).add(board[i][j]);
            }
        }
    }
    return true;
};