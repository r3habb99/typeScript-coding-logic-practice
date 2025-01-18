// Determine if an array contains a subarray with a sum of zero in an array function logic in Typescript
function hasSubArrayWithZeroSum(sumArr: number[]): boolean {
  const sumSet = new Set<number>();
  let cummulativeSum: number = 0;

  for (const num of sumArr) {
    cummulativeSum += num;

    if (cummulativeSum === 0 || sumSet.has(cummulativeSum)) {
      return true;
    }
    sumSet.add(cummulativeSum);
  }
  return false;
}

const sumArr: number[] = [4, 2, -3, 1, 6];

const resultSumArray: boolean = hasSubArrayWithZeroSum(sumArr);
console.log(resultSumArray);
