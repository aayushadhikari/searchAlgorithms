function getDigit(number, digit) {
  return Math.floor(Math.abs(number) / Math.pow(10, digit)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let max = 0;
  for (num of nums) {
    max = Math.max(max, digitCount(num));
  }
  return max;
}

function radixSort(nums) {
  let times = mostDigits(nums);

  for (let i = 0; i < times; i++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < nums.length; j++) {
      let index = getDigit(nums[j], i);
      digitBuckets[index].push(nums[j]);
    }

    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(mostDigits([1, 2, 34, 567, 1235]));
console.log(radixSort([1, 5, 2, 3, 100, 0, 90, 54, 4]));
