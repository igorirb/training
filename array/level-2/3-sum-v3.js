/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = [];
    const dict = {};
    let pivot = 0;
    while (pivot <= nums.length - 3) {
        let left = pivot + 1;
        while (left <= nums.length - 2) {
            let right = left + 1;
            while (right < nums.length) {
                if (nums[pivot] + nums[left] + nums[right] === 0) {
                    const min = Math.min(nums[pivot], nums[left], nums[right]);
                    const max = Math.max(nums[pivot], nums[left], nums[right]);
                    const mid = (-1) * (min + max);
                    if (!dict[`${min}${mid}${max}`]) {
                        res.push([min, mid, max]);
                        dict[`${min}${mid}${max}`] = 1;
                    }
                    right = nums.length;
                }
                right += 1;
            }
            left += 1;
        }
        pivot += 1;
    }
    return res;
};