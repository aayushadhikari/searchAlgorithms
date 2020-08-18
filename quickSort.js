function pivot(arr, start, end) {
  let pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
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
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }

  //console.log(arr);
  return arr;
}

console.log(quickSort([3, 2, 1, 4, 5, 7, 6, 8]));
