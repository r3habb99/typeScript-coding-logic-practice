//Rotate an array to the right by k steps function logic in Typescript
function rotateArray(arr: number[], k: number): number[] {
  const n: number = arr.length;
  k = k % n;

  if (k === 0) {
    return arr;
  }

  const rotatedArray: number[] = arr.slice(n - k).concat(arr.slice(0, n - k));
  return rotatedArray;
}

const array: number[] = [2, 3, 4, 5, 6, 7, 8, 9];
const k: number = 3;

const rotatedArray = rotateArray(array, k);
console.log(rotatedArray);
