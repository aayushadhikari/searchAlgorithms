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

console.log(mostDigits([1, 2, 34, 567, 1235]));
