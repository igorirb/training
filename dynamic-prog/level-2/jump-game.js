/**
 * @param {number[]} nums
 * @return {boolean}
 */
function jump (nums, start) {
    let result = false;
    if (start === nums.length - 1) return true;
    if (start >= nums.length) {
        return false;
    }
    for (let i = 1; i <= nums[start]; i += 1) {
        if (jump(nums, start + i)) {
            result = true;
        }
    }
    return result;
}
var canJump = function(nums) {
    let result = false;
    if (jump(nums, 0)) {
        result = true;
    }
    return result;
};