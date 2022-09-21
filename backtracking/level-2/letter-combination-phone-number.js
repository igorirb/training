/**
 * @param {string} digits
 * @return {string[]}
 */
 const phone = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};
function build (dArr, curr, next) {
  if (next >= dArr.length) return curr;
  let final = [];
  const currDigit = dArr[next];
  const letters = phone[currDigit];
  for (let i = 0; i < letters.length; i += 1) {
      const res = build(dArr, [...curr, letters[i]], next + 1);
      if (next === dArr.length - 1) {
          final.push(res.join(''));
      } else {
          final = final.concat(res);
      }
  }
  return final;
}
var letterCombinations = function(digits) {
  const dArr = digits.split('');
  const combinations = build(dArr, [], 0);
  return combinations;
};