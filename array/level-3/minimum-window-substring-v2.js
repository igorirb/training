/**
 * Attempt using double pointer
 * Result: Time Limit Exceeded
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = {};
    for (let i = 0; i < t.length; i += 1) {
        if (!map[t[i]]) {
            map[t[i]] = 0;
        }
        map[t[i]] += 1;
    }
    let left = 0;
    let stopLeft = false;
    let right = 0;
    let stopRight = false;
    let copyMap;
    let currStr;
    while (left < s.length) {
        if (!stopLeft) {
            if (map[s[left]] > 0) {
                copyMap = { ...map };
                stopLeft = true;
                stopRight = false;
                right = left + 1;
                if (copyMap[s[left]] > 0) {
                    copyMap[s[left]] -= 1;
                }
                if (copyMap[s[left]] === 0) {
                    delete copyMap[s[left]];
                }
            } else {
                left += 1;
            }
        }
        if (copyMap && Object.keys(copyMap).length === 0) {
            const subStr = s.substr(left, right - left);
            if (!currStr || subStr.length < currStr.length) {
                currStr = subStr;
            }
        }
        if (!stopRight) {
            if (map[s[right]] > 0) {
                if (copyMap[s[right]] > 0) {
                    copyMap[s[right]] -= 1;
                }
                if (copyMap[s[right]] === 0) {
                    delete copyMap[s[right]];
                }
            }
            right += 1;
        }
        if (copyMap && Object.keys(copyMap).length === 0) {
            const subStr = s.substr(left, right - left);
            if (!currStr || subStr.length < currStr.length) {
                currStr = subStr;
            }
            copyMap[s[left]] = 1;
            left += 1;
            stopLeft = false;
            stopRight = true;
        } else if (right >= s.length) {
            left += 1;
            right = left;
            stopLeft = false;
        }
    }
    return currStr || '';
};