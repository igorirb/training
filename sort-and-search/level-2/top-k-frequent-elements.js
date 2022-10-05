/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    for (let i = 0; i < nums.length; i += 1) {
        if (!map[nums[i]]) {
            map[nums[i]] = 0;
        }
        map[nums[i]] += 1;
    }
    const keys = Object.keys(map);
    const values = Object.values(map);
    const res = [];
    while (k > 0) {
        let max = Number.MIN_SAFE_INTEGER;
        let maxIndex = 0;
        for (let i = 0; i < values.length; i += 1) {
            if (values[i] > max) {
                max = values[i];
                maxIndex = i;
            }
        }
        res.push(keys[maxIndex]);
        values[maxIndex] = 0;
        k -= 1;
    }
    return res;
};