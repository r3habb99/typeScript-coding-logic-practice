// Move all zeros in an array to the end in an array function logic in Typescript
function moveZerosToEnd(arr: number[]): number[] {
  const nonZeroElements: number[] = arr.filter((num) => num !== 0);
  const zeroCount: number = arr.length - nonZeroElements.length;
  const resultArray: number[] = nonZeroElements.concat(
    Array(zeroCount).fill(0)
  );
  return resultArray;
}

const zeroArray: number[] = [4, 5, 0, 0, 6, 0, 7];
const resultArr = moveZerosToEnd(zeroArray);
console.log(resultArr);
