/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const charMap = {};
  for (let i = 0; i < t.length; i += 1) {
    charMap[t[i]] = (charMap[t[i]] || 0) + 1;
  }
  let left = 0;
  let right = 0;
  let neededLen = Object.keys(charMap).length;
  let currStr = '';
  while (right < s.length) {
    const rightChar = s[right];
    charMap[rightChar] -= 1;
    if (charMap[rightChar] === 0) neededLen -= 1;
    while (neededLen === 0) {
      const tempStr = s.slice(left, right + 1);
      if (!currStr || currStr.length > tempStr.length) {
        currStr = tempStr
      }
      const leftChar = s[left];
      if (charMap[leftChar] === 0) {
        neededLen += 1;
      }
      charMap[leftChar] += 1;
      left += 1;
    }
    right += 1;
  }
  return currStr || '';
};