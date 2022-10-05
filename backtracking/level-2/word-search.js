// TIME LIMIT EXCEEDED
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 function searchAdjacent(board, i, j, word, index, map) {
  const w = board.length;
  const h = board[0].length;
  if (i < 0 || i >= w || j < 0 || j >= h) return false;
  if (board[i][j] !== word[index]) return false;
  if (map[`${i}${j}`] === 1) return false;
  map[`${i}${j}`] = 1;
  if (word.length - 1 === index) return true;
  const left = searchAdjacent(board, i - 1, j, word, index + 1, { ...map });
  if (left) return true;
  const right = searchAdjacent(board, i + 1, j, word, index + 1, { ...map });
  if (right) return true;
  const up = searchAdjacent(board, i, j - 1, word, index + 1, { ...map });
  if (up) return true;
  const down = searchAdjacent(board, i, j + 1, word, index + 1, { ...map });
  if (down) return true;
  return false;
}
var exist = function(board, word) {
  const w = board.length;
  const h = board[0].length;
  const wordArr = word.split('');
  for (let i = 0; i < w; i += 1) {
      for (let j = 0; j < h; j += 1) {
          if (searchAdjacent(board, i, j, wordArr, 0, {})) {
              return true;
          }
      }
  }
  return false;
};