/**
 * @param {number} n
 * @return {string[]}
 */
 function build(res, curr, left, right) {
  if (left < 0 || right < 0) return;
  if (left === 0 && right === 0) {
      res.push(curr.join(''));
      return;
  }
  build(res, [...curr, '('], left - 1, right);
  if (left < right) {
      build(res, [...curr, ')'], left, right - 1);
  }
}
var generateParenthesis = function(n) {
  const res = [];
  build(res, [], n, n);
  return res;
};