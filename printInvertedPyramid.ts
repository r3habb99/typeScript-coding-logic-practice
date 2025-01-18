// Inverted Pyramid Star Pattern function logic in Typescript
function printInvertedPyramid(heightSize: number): string {
  let pattern = "";
  for (let i = heightSize; i > 0; i--) {
    pattern += " ".repeat(heightSize - i);
    pattern += "* ".repeat(i);
    pattern += "\n";
  }
  return pattern;
}

const height: number = 5;
const invertedPyramid = printInvertedPyramid(height);
console.log(invertedPyramid);
