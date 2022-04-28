/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  let nextSum = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] < 9) {
          digits[i] += 1;
          return digits;
      } else if (digits[i] === 9 && nextSum === 1) {
          digits[i] = 0;
          nextSum = 1;
      } else {
          digits[i] += nextSum;
          nextSum = 0;
      }
      if (i === 0 && digits[i] === 0) {
          digits.unshift(1);
      }
  }
  return digits;
};