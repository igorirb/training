/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
  this.nums = nums;
};

/**
* @return {number[]}
*/
Solution.prototype.reset = function() {
  return this.nums;
};

/**
* @return {number[]}
*/
Solution.prototype.shuffle = function() {
  const size = this.nums.length;
  const result = [...this.nums];
  for (let i = 0; i < size; i += 1) {
      const step = Math.round(Math.random() * 10) % size;
      let aux = result[i];
      result[i] = result[(i + step) % size];
      result[(i + step) % size] = aux;
  }
  return result;
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/