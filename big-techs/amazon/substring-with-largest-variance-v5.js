// KADANE ALGORITHM
/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function(s) {
  const sLen = s.length;
  const sArr = s.split('');
  const letters = Object.keys(sArr.reduce((acc, val) => {
      if (!acc[val]) {
          acc[val] = 1;
      }
      return acc;
  }, {}));
  let max = 0;
  for (let i = 0; i < letters.length; i += 1) {
      const a = letters[i];
      for (let j = 0; j < letters.length; j += 1) {
          const b = letters[j];
          let aux = 0;
          let hasB = false;
          let firstB = false;
          for (let k = 0; k < sLen; k += 1) {
              aux += sArr[k] === a;
              if (sArr[k] == b) {
                  hasB = true;
                  if (firstB && aux >= 0) {
                      firstB = false;
                  } else if (--aux < 0) {
                      firstB = true;
                      aux = -1;
                  }
              }
              max = Math.max(max, hasB ? aux : 0);
          }
      }
  }
  return max;
};