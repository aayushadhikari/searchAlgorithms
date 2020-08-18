function getDigit(number, digit) {
  return Math.floor(Math.abs(number) / Math.pow(10, digit)) % 10;
}

console.log(getDigit(12345, 5));
