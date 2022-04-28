/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const result = [];
    let counter = 0;
    let lastNum = nums[0];
    const indexes = [0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === lastNum) {
            nums[i] = 'x';
            counter++;
        } else {
            lastNum = nums[i];
            indexes.push(i);
        }
    }
    for (let i = 1; i < indexes.length; i++) {
        if (indexes[i] !== i) {
            nums[i] = nums[indexes[i]];
            nums[indexes[i]] = 'x';
        }
    }
    return nums.length - counter;
};