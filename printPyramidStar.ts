// Pyramid Star Pattern function logic in Typescript
function printPyramidStar(heightSize: number): string {
  let pattern = "";
  for (let i = 1; i <= heightSize; i++) {
    pattern += " ".repeat(heightSize - i);
    pattern += "* ".repeat(i);
    pattern += "\n";
  }
  return pattern;
}

const starHeight: number = 5;
const pyramidStar = printPyramidStar(starHeight);
console.log(pyramidStar);
