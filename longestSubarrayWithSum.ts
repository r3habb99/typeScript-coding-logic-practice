// Find the length of the longest subarray with a given sum in an array function logic in Typescript
function longestSubarrayWithSum(arr: number[], target: number): number {
  const sumIndexMap: Map<number, number> = new Map();
  let cummulativeSum: number = 0;
  let maxLength: number = 0;

  sumIndexMap.set(0, -1);

  for (let i = 0; i < arr.length; i++) {
    cummulativeSum += arr[i];

    if (sumIndexMap.has(cummulativeSum - target)) {
      maxLength = Math.max(
        maxLength,
        i - (sumIndexMap.get(cummulativeSum - target) ?? 0)
      );
    }
    if (!sumIndexMap.has(cummulativeSum)) {
      sumIndexMap.set(cummulativeSum, i);
    }
  }
  return maxLength;
}

const longArr: number[] = [2, -1, 2, 1, -1, 2];
const longTarget: number = 3;

const longestSubArray: number = longestSubarrayWithSum(longArr, longTarget);
console.log(longestSubArray);
