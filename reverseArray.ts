// Revrse array function logic in Typescript
function reverseArray(arr: number[]): number[] {
  let start: number = 0;
  let end: number = arr.length - 1;
  while (start < end) {
    const temp: number = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}
let arr1: number[] = [2, 4, 5, 6, 7, 8];
console.log(reverseArray(arr1));
