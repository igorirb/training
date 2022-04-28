/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// [1,0,3,4,0,5]=>[1,0,3,4,0,5] / i=0; c=0
// [1,0,3,4,0,5]=>[1,0,3,4,0,5] / i=1; c=1
// [1,0,3,4,0,5]=>[1,3,0,4,0,5] / i=2; c=1
// [1,3,0,4,0,5]=>[1,3,4,0,0,5] / i=3; c=1
// [1,3,4,0,0,5]=>[1,3,4,0,0,5] / i=4; c=2
// [1,3,4,0,0,5]=>[1,3,4,5,0,0] / i=5; c=1
var moveZeroes = function(nums) {
    let counter = 0;
    for (let i = 0; i < nums.length; i += 1) {
        if (nums[i] === 0) {
            counter++;
        } else if (counter > 0) {
            nums[i - counter] = nums[i];
            nums[i] = 0;
        }
    }
};