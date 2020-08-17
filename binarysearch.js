function binarysearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor(right + left / 2);

  while (left <= right) {
    if (arr[mid] === val) return mid;
    else if (arr[mid] > val) {
      right = mid - 1;
    } else left = mid + 1;
    mid = Math.floor((right + left) / 2);
  }
  return -1;
}

console.log(binarysearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 11], 11));
