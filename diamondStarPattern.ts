// Diamond Star Pattern function logic in Typescript
function diamondStarPattern(height: number): string {
    let pattern = '';
    // Top pyramid
    for (let i = 1; i <= height; i++) {
        pattern += ''.repeat(height - i);
        pattern += '* '.repeat(i);
        pattern += '\n';
    }
    // Bottom inverted pyramid
    for (let i = height - 1; i > 0; i--) {
        pattern += ''.repeat(height - i);
        pattern += '* '.repeat(i);
        pattern += '\n';
    }
    return pattern;
}
const diamondStarHeight: number = 5;
const starResult: string = diamondStarPattern(height);
console.log(starResult);
