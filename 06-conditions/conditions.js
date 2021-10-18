let x = 10;
let y = 1;
let z = 1;

// Simple if statement
if (x > y) {
  console.log("x is greater than y");
}

// If-else statement
if (y > x) {
  console.log("y is greater than x");
} else {
  console.log("x is greater than y");
}

// With else if
if (y > z) {
  console.log("y is greater than z");
} else if (z === y) {
  console.log("z is equal to y");
} else {
  console.log("z is greater than y");
}

// Switch
let animal = "cat";

switch (animal) {
  case "dog":
    console.log("Animal is a dog");
    break;
  case "cat":
    console.log("Animal is a cat");
    break;
  default:
    console.log("Unknown aninmal");
}

// Ternary Expression
y > x ? console.log("y is greater than x") : console.log("x is greater than y");
