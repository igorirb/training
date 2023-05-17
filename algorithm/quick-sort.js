function swap(items, i, j) {
  const temp = items[i];
  items[i] = items[j];
  items[j] = temp;
}

function partition(items, left, right) {
  const pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i += 1;
    }
    while (items[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      swap(items, i, j); //swap two elements
      i += 1;
      j -= 1;
    }
  }
  return i;
}

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) { //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) { //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}

const items = [6,3,8,0,4,2,7];
var result = quickSort(items, 0, items.length - 1);
console.log(result);