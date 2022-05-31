function find_averages_of_subarrays(nums, k) {
  const averages = [];
  let windowSum = 0.0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd += 1) {
    windowSum += nums[windowEnd];
    if (windowEnd >= k - 1) {
      averages.push(windowSum / k);
      windowSum -= nums[windowStart];
      windowStart += 1;
    }
  }
  return averages;
}

async function run() {
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const k = 2;
  console.log(find_averages_of_subarrays(nums, k));
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
