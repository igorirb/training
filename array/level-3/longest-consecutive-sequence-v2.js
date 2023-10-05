/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) return 0;
    nums.sort((a, b) => a - b);
    let last = nums[0];
    let len = 1;
    let maxLen = 1;
    for (let i = 1; i < nums.length; i += 1) {
        if (nums[i] - last === 1) {
            len += 1;
            if (len > maxLen) {
                maxLen = len;
            }
        } else if (nums[i] !== last) {
            len = 1;
        }
        last = nums[i];
    }
    return maxLen;
};