/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function build(res, nums, curr) {
    res.push(curr);
    if (nums.length === 0) return;
    for (let i = 0; i < nums.length; i += 1) {
        const newNums = nums.slice(i + 1);
        build(res, newNums, [...curr, nums[i]]);
    }
}
var subsets = function(nums) {
    const res = [];
    build(res, nums, []);
    return res;
};