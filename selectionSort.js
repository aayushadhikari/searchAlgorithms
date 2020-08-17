function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest] > arr[j]) {
        smallest = j;
      }
    }
    if (i === smallest) continue;
    let temp = arr[i];
    arr[i] = arr[smallest];
    arr[smallest] = temp;
  }
  return arr;
}

console.log(selection([1, 22, 33, 44, 2]));
