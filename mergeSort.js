function merge(arr1, arr2) {
  let arr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      arr.push(arr2[j]);
      j++;
    } else {
      arr.push(arr1[i]);
      i++;
    }
  }

  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++;
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let arr1 = arr.slice(0, mid);
  let arr2 = arr.slice(mid);

  if (arr1.length <= 1 && arr2.length <= 1) {
    return merge(arr1, arr2);
  }

  return merge(mergeSort(arr1), mergeSort(arr2));
}

console.log(merge([1, 4, 7, 9, 15, 20], [2, 3, 6, 10]));
console.log(mergeSort([1, 9, 2, 6, 4, 3, 0]));
