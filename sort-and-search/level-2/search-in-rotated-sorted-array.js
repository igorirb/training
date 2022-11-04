/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [4,5,6,7,0,1,2]
function _search (arr, target, start, end) {
    if (start > end) return -1;
    const pivot = Math.round((start + end) / 2);
    if (arr[pivot] === target) return pivot;
    const left = _search(arr, target, start, pivot - 1);
    const right = _search(arr, target, pivot + 1, end);
    if (left !== -1) return left;
    if (right !== -1) return right;
    return -1;
}
var search = function(nums, target) {
    return _search(nums, target, 0, nums.length);
};