function naive(str, sub) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === sub[0]) {
      if (str.substring(i, i + sub.length) === sub) count++;
    }
  }
  return count;
}

console.log(naive("lorie loled", "lo"));
