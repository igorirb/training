/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return "1";
  const say = countAndSay(n - 1);
  const counts = [];
  const digits = [];
  let lastDigit = null;
  for (let i = 0; i < say.length; i += 1) {
      if (lastDigit === say[i]) {
          counts[counts.length - 1] += 1;
      } else {
          lastDigit = say[i];
          digits.push(say[i]);
          counts.push(1);
      }
  }
  let res = "";
  for (let i = 0; i < counts.length; i += 1) {
      res += `${counts[i]}${digits[i]}`;
  }
  return res;
};