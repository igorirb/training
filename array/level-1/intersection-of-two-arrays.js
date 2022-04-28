/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const bigNums = nums1.length >= nums2.length ? nums1.sort((a, b) => a - b) : nums2.sort((a, b) => a - b);
    const smallNums = nums1.length < nums2.length ? nums1.sort((a, b) => a - b) : nums2.sort((a, b) => a - b);
    console.log(bigNums, smallNums)
    const response = [];
    let j = 0;
    for (let i = 0; i < bigNums.length; i++) {
        if (j === smallNums.length) {
            break;
        }
        while (bigNums[i] > smallNums[j]) {
            j++;
        }
        if (bigNums[i] === smallNums[j]) {
            response.push(bigNums[i]);
            j++;
        }
    }
    return response;
};