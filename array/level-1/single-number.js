/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  const counters = {};
  for (let i = 0; i < nums.length; i++) {
      const curElem = nums[i];
      if (!counters[curElem]) {
          counters[curElem] = 0;
      }
      counters[curElem] += 1;
  }
  for (let i = 0; i < nums.length; i++) {
      const curElem = nums[i];
      if (counters[curElem] === 1) {
          return curElem;
      }
  }
};