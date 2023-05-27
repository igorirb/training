/**
 * Attempt using recurssion
 * Result: Time Limit Exceeded
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function checkAndPush(s, idx, map, possibilities, str) {
  if (map[s[idx]] > 0) {
    map[s[idx]] -= 1;
  }
  if (map[s[idx]] === 0) {
    delete map[s[idx]];
  }
  if (Object.keys(map).length === 0) {
    possibilities.push(str);
  }
}
function findSubstring(s, idx, map, possibilities, visited) {
  if (visited[idx] > 0) {
    return;
  }
  visited[idx] = 1;
  const copyMap = { ...map };
  let currStr = s[idx];
  checkAndPush(s, idx, copyMap, possibilities, currStr);
  for (let i = idx + 1; i < s.length; i += 1) {
    currStr += s[i];
    if (map[s[i]] > 0) {
      findSubstring(s, i, map, possibilities, visited);
      checkAndPush(s, i, copyMap, possibilities, currStr);
    }
  }
}
var minWindow = function(s, t) {
  const tMap = {};
  for (let i = 0; i < t.length; i += 1) {
    if (!tMap[t[i]]) {
      tMap[t[i]] = 0;
    }
    tMap[t[i]] += 1;
  }
  const visited = {};
  const possibilities = [];
  findSubstring(s, 0, tMap, possibilities, visited);
  let currStr;
  for (let i = 0; i < possibilities.length; i += 1) {
    if (!currStr || possibilities[i].length < currStr.length) {
      currStr = possibilities[i];
    }
  }
  return currStr || "";
};