// Find the second largest element in an array function logic in Typescript
function findSecondLargest(arr: number[]): number | null {
  const uniqueArr: number[] = [...new Set(arr)];
  uniqueArr.sort((a, b) => b - a);

  if (uniqueArr.length < 2) {
    return null;
  }

  return uniqueArr[1];
}

const arrayData: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const secondLargest: number | null = findSecondLargest(arrayData);

if (secondLargest !== null) {
  console.log("Original Array", arrayData);
  console.log("Second largest element in Array", secondLargest);
} else {
  console.log(
    "There is no second largets element (not enough in unique elements)."
  );
}
