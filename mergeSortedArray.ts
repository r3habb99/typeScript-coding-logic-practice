// Merge two sorted arrays into a single sorted array in an array function logic in Typescript
function mergeSortedArray(arr1: number[], arr2: number[]): number[] {
  const mergedArray: number[] = [];
  let i: number = 0;
  let j: number = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}

const userArray1: number[] = [2, 5, 6];
const userArray2: number[] = [3, 7, 9];

const mergedArray = mergeSortedArray(userArray1, userArray2);
console.log(mergedArray);
