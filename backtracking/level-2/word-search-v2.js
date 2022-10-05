/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 function searchAdjacent(board, i, j, word, index) {
  const w = board.length;
  const h = board[0].length;
  if (i < 0 || i >= w || j < 0 || j >= h) return false;
  if (board[i][j] !== word[index]) return false;
  if (word.length - 1 === index) return true;
  board[i][j] = '#';
  const rowOffset = [1, 0, -1, 0];
  const colOffset = [0, 1, 0, -1];
  let ret = false;
  for (let k = 0; k < 4; k += 1) {
      ret = searchAdjacent(
          board,
          i + rowOffset[k],
          j + colOffset[k],
          word,
          index + 1,
      );
      if (ret) {
          break;
      }
  }
  board[i][j] = word[index];
  return ret;
}
var exist = function(board, word) {
  const w = board.length;
  const h = board[0].length;
  const wordArr = word.split('');
  for (let i = 0; i < w; i += 1) {
      for (let j = 0; j < h; j += 1) {
          if (searchAdjacent(board, i, j, wordArr, 0)) {
              return true;
          }
      }
  }
  return false;
};