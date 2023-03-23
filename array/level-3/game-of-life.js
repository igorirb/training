/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const newBoard = [];
    for (let i = 0; i < board.length; i += 1) {
        if (!newBoard[i]) {
            newBoard[i] = [];
        }
        for (let j = 0; j < board[0].length; j += 1) {
            if (newBoard[i][j] === undefined) {
                newBoard[i].push(board[i][j]);
            }
            let sum = 0;
            if (i - 1 >= 0) {
                sum += board[i - 1][j];
                if (j - 1 >= 0) {
                    sum += board[i - 1][j - 1];
                }
                if (j + 1 < board[0].length) {
                    sum += board[i - 1][j + 1];
                }
            }
            if (i + 1 < board.length) {
                sum += board[i + 1][j];
                if (j - 1 >= 0) {
                    sum += board[i + 1][j - 1];
                }
                if (j + 1 < board[0].length) {
                    sum += board[i + 1][j + 1];
                }
            }
            if (j - 1 >= 0) {
                sum += board[i][j - 1];
            }
            if (j + 1 < board[0].length) {
                sum += board[i][j + 1];
            }
            if (newBoard[i][j] === 1) {
                if (sum < 2 || sum > 3) {
                    newBoard[i][j] = 0;
                } else {
                    newBoard[i][j] = 1;
                }
            } else if (sum === 3) {
                newBoard[i][j] = 1;
            }
        }
    }
    for (let i = 0; i < board.length; i += 1) {
        for (let j = 0; j < board[0].length; j += 1) {
            board[i][j] = newBoard[i][j];
        }
    }
};