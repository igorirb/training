function minimalHeaviestSetA(arr) {
  arr.sort((a, b) => a - b);
  const a = [];
  let sum = arr.reduce((acc, v) => acc + v, 0);
  let aSum = 0;
  while (sum > aSum) {
      const n = arr.pop();
      a.unshift(n);
      aSum += n;
      sum -= n;
  }
  let countFirst = arr.reduce((acc, v) => {
      if (v === a[0]) {
          return acc + 1;
      }
      return acc;
  }, 0);
  while (countFirst > 0) {
      const n = arr.pop();
      a.unshift(n);
      countFirst -= 1;
  }
  return a;
}