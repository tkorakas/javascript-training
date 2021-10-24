// Parameters
function add(a, b) {
  return a + b;
}
console.log(add(1, 2));

// Call with less arguments
console.log(add(1));

// Defaults params
function add(a = 0, b = 0) {
  return a + b;
}
console.log(add(1, 2));

// Dynamic arguments
function add() {
  console.log(arguments);
  return a + b;
}
console.log(add(1, 2));

// Rest version
function add(...args) {
  console.log(args);
  return a + b;
}
console.log(add(1, 2));

// Arrow function one argument version
// const hello = name => `Hello ${name}`;
