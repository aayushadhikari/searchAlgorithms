function pivot(arr, start, end) {
  let pivotIndex = start;
  let pivot = arr[pivotIndex];

  for (let i = pivotIndex + 1; i < end; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      let temp = arr[pivotIndex];
      arr[pivotIndex] = arr[i];
      arr[i] = temp;
    }
  }
  let temp = arr[pivotIndex];
  arr[pivotIndex] = arr[start];
  arr[start] = temp;
  console.log(pivotIndex);
  console.log(arr);
  return pivot;
}

pivot([3, 4, 0, 1, 2, 3], 0, 6);
