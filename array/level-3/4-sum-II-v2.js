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
    const map1 = {};
    const map2 = {};
    for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) {
            const key1 = `${nums1[i]},${nums2[j]}`;
            const key2 = `${nums3[i]},${nums4[j]}`;
            const sum1 = nums1[i] + nums2[j];
            const sum2 = nums3[i] + nums4[j];
            if (!map1[sum1]) {
                map1[sum1] = [];
            }
            map1[sum1].push(key1);
            if (!map2[sum2]) {
                map2[sum2] = [];
            }
            map2[sum2].push(key2);
        }
    }
    const map1Sums = Object.keys(map1);
    for (let i = 0; i < map1Sums.length; i += 1) {
        const sum = -1 * map1Sums[i];
        if (map2[sum] !== undefined) {
            const pairs1 = map1[map1Sums[i]];
            const pairs2 = map2[sum];
            for (let j = 0; j < pairs1.length; j += 1) {
                for (let k = 0; k < pairs2.length; k += 1) {
                    const tuple = `${pairs1[j]},${pairs2[k]}`;
                    tuples.push(tuple.split(','));
                }
            }
        }
    }
    return tuples.length;
};