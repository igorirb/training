/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const dict = {};
    for (let i = 0; i < nums.length; i += 1) {
        dict[nums[i]] = 1;
    }
    let maxLen = 0;
    for (let i = 0; i < nums.length; i += 1) {
        const num = nums[i];
        if (!dict[num - 1]) { // this ensures we start counting from the beginning of the sequence
            let curNum = num;
            let curLen = 1;
            while (dict[curNum + 1]) {
                curNum += 1;
                curLen += 1;
            }
            maxLen = Math.max(maxLen, curLen);
        }
    }
    return maxLen;
};