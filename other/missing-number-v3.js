/**
 * Using quick sort to sort the array
 * @param {number[]} nums
 * @return {number}
 */
 const quicksort = function (arr) {
  const size = arr.length;
  if (size === 0) return arr;
  const pivot = arr[size - 1];
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < size - 1; i += 1) {
      if (arr[i] <= pivot) {
          arr1.push(arr[i]);
      } else {
          arr2.push(arr[i]);
      }
  }
  arr1 = quicksort(arr1);
  arr2 = quicksort(arr2);
  return arr1.concat(pivot).concat(arr2);
}
var missingNumber = function (nums) {
const size = nums.length;
nums = quicksort(nums);
for (let i = 0; i < size; i += 1) {
    if (i != nums[i]) return i;
}
return size;
};