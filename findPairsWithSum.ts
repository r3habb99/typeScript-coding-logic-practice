// Find all pairs in an array whose sum equals a target in an array function logic in Typescript
function findPairsWithSum(input: number[], target: number): number[][] {
  const pairs: number[][] = [];
  const seen: Set<number> = new Set();

  for (const num of input) {
    const complement: number = target - num;

    if (seen.has(complement)) {
      pairs.push([Math.min(num, complement), Math.max(num, complement)]);
    }
    seen.add(num);
  }
  return pairs;
}

const inputArray: number[] = [1, 2, 3, 4, 5, 6];
const userTarget: number = 5;

const pairs = findPairsWithSum(inputArray, userTarget);

if (pairs.length > 0) {
  console.log("Pairs whose sum equals the target:", pairs);
} else {
  console.log("No pairs found whose sum equals the target.");
}
