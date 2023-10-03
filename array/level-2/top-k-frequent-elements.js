/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i += 1) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 0);
        }
        map.set(nums[i], map.get(nums[i]) + 1);
    }
    const keys = Array.from(map.keys());
    keys.sort((a, b) => map.get(b) - map.get(a));
    return keys.slice(0, k);
};