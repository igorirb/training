/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const buildKey = function(str) {
  const chars = [];
  for (let i = 0; i < str.length; i += 1) {
      chars[i] = str[i];
  }
  chars.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  return chars.join('');
}
var groupAnagrams = function(strs) {
  const map = new Map();
  const res = [];
  for (let i = 0; i < strs.length; i += 1) {
      const word = strs[i];
      const key = buildKey(word);
      if (map[key] === undefined) {
          map[key] = res.length;
      }
      if (res[map[key]] === undefined) {
          res[map[key]] = [];
      }
      res[map[key]].push(word);
  }
  return res;
};