// Check if two arrays are rotations of each other in an array function logic in Typescript
function areRotations(arr1: number[], arr2: number[]): number | boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const concatenated = arr1.concat(arr1);

  return concatenated.join(",").includes(arr2.join(","));
}

const array1: number[] = [1, 2, 3, 4];
const array2: number[] = [3, 4, 1, 2];

const result: number | boolean = areRotations(array1, array2);
console.log(result);
if (result) {
  console.log("The two arrays are rotations of each other.");
} else {
  console.log("The two arrays are not rotations of each other.");
}
