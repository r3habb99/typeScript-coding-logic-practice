// Find maximum and minimum elements in array function logic in Typescript
interface MaxMin {
  max: number;
  min: number;
}
function findMaxMin(arr: number[]): MaxMin {
  const max: number = Math.max(...arr);
  const min: number = Math.min(...arr);
  return { max, min };
}
const MaxMinArray: number[] = [2, 4, 8, 9, 2, 7, 3];
const { max, min } = findMaxMin(MaxMinArray);
console.log(max, min);
