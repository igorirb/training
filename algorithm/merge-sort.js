// Merge Sort is O(nlogn)
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

// usage
let arr=[7,3,9,5,4,8,1,6,2];
mergesort(arr, 0, 8);
console.log(arr);
