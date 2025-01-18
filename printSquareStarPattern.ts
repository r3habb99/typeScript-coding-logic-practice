// Square Star Pattern function logic in Typescript
function printSquareStarPattern(starSize: number): string {
  let pattern = "";
  for (let i: number = 0; i < starSize; i++) {
    for (let j: number = 0; j < starSize; j++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  return pattern;
}

const starSize: number = 4;
const starPattern = printSquareStarPattern(starSize);
console.log(starPattern);
