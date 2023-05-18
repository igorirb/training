/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const curr = [];
    const max = [];
    let currMax = nums[0];
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] > currMax) {
            currMax = nums[i];
        }
        curr.push(nums[i]);
        if (curr.length > k) {
            const num = curr.shift();
            if (currMax === num) {
                currMax = curr[0];
                for (let j = 1; j < curr.length; j += 1) {
                    if (curr[j] > currMax) {
                        currMax = curr[j];
                    }
                }
            }
        }
        if (curr.length === k) {
            max.push(currMax);
        }
    }
    return max;
};