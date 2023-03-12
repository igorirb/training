/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const arr = Array(nums.length);
    arr.fill(1, 0, nums.length);
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (nums[i] > nums[j] && arr[i] < arr[j] + 1) {
                arr[i] = arr[j] + 1;
            }
        }
    }
    return Math.max(...arr);
};