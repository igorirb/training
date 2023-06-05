/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function merge(arr, l, mid, h) {
  const arr1 = arr.slice(l, mid + 1);
  const arr2 = arr.slice(mid + 1, h + 1);
  let i = 0;
  let j = 0;
  let res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i++]);
    } else {
      res.push(arr2[j++]);
    }
  }
  for (; i < arr1.length; i += 1) {
    res.push(arr1[i]);
  }
  for (; j < arr2.length; j += 1) {
    res.push(arr2[j]);
  }
  for (let k = l; k <= h; k += 1) {
    arr[k] = res[k - l];
  }
}

function mergesort(arr, l, h) {
  if (l < h) {
    let mid = Math.floor((l + h) / 2);
    mergesort(arr, l, mid);
    mergesort(arr, mid + 1, h);
    merge(arr, l, mid, h);
  }
}

var findKthLargest = function(nums, k) {
    const length = nums.length;
    mergesort(nums, 0, length - 1);
    return nums[length - k];
};