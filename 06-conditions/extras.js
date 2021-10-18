let x = 10;
let y = 1;
let z = 1;

// Ternary Expression
y > x ? console.log("y is greater than x") : console.log("x is greater than y");

// Short circuiting
console.log(x && y && 5);

// Nullish coalescing operator
const foo = null ?? "default string";
console.log(foo);
