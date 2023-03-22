/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const n = nums1.length;
    const map1 = {};
    const map2 = {};
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
            const key1 = `${nums1[i]},${nums2[j]}`;
            const key2 = `${nums3[i]},${nums4[j]}`;
            const sum1 = nums1[i] + nums2[j];
            const sum2 = nums3[i] + nums4[j];
            if (map1[sum1] === undefined) {
                map1[sum1] = 0;
            }
            map1[sum1] += 1;
            if (map2[sum2] === undefined) {
                map2[sum2] = 0;
            }
            map2[sum2] += 1;
        }
    }
    let count = 0;
    const map1Sums = Object.keys(map1);
    for (let i = 0; i < map1Sums.length; i += 1) {
        const sum = -1 * map1Sums[i];
        if (map2[sum] !== undefined) {
            count += map1[map1Sums[i]] * map2[sum];
        }
    }
    return count;
};