/**
 * Runtime error.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const n = nums1.length;
    const tuples = [];
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
            for (let k = 0; k < n; k += 1) {
                for (let l = 0; l < n; l += 1) {
                    const sum = nums1[i] + nums2[j] + nums3[k] + nums4[l];
                    if (sum === 0) {
                        tuples.push([nums1[i], nums2[j], nums3[k], nums4[l]]);
                    }
                }
            }
        }
    }
    return tuples.length;
};