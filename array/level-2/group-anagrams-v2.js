/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const groups = {};
    for (let i = 0; i < strs.length; i += 1) {
        const curr = strs[i].split('');
        const sorted = [...curr].sort((a, b) => {
            const i = a.charCodeAt() || 0;
            const j = b.charCodeAt() || 0;
            return j - i;
        });
        if (!groups[sorted]) {
            groups[sorted] = [];
        }
        groups[sorted].push(curr.join(''));
    }
    return Object.values(groups);
};