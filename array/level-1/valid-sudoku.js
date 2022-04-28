/**
 * @param {character[][]} board
 * @return {boolean}
 */
 const validRows = function(board) {
  for (let i = 0; i < 9; i++) {
      let row = {};
      for (let j = 0; j < 9; j++) {
          if (row[board[i][j]]) {
              return false;
          }
          if (board[i][j] !== '.') {
              row[board[i][j]] = 1;
          }
      }
  }
  return true;
}
const validColumns = function(board) {
  for (let j = 0; j < 9; j++) {
      let column = {};
      for (let i = 0; i < 9; i++) {
          if (column[board[i][j]]) {
              return false;
          }
          if (board[i][j] !== '.') {
              column[board[i][j]] = 1;
          }
      }
  }
  return true;
}
const validGroups = function(board) {
  const groups = [0, 3, 6];
  for (let m = 0; m < groups.length; m++) {
      for (let n = 0; n < groups.length; n++) {
          let p = groups[m];
          let q = groups[n];
          let group = {};
          for (let i = p; i < p + 3; i++) {
              for (let j = q; j < q + 3; j++) {
                  if (group[board[i][j]]) {
                      return false;
                  }
                  if (board[i][j] !== '.') {
                      group[board[i][j]] = 1;
                  }
              }
          }
          
      }
  }
  return true;
}
var isValidSudoku = function(board) {
  const rows = validRows(board);
  const columns = validColumns(board);
  const groups = validGroups(board);
  console.log(rows, columns, groups);
  return rows && columns && groups;
};