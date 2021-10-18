// For ... of loop
// Only for iterables.
// In order to be iterable, non-array objects must have a [Symbol.iterator]() method

const exampleArray = ["a", "b", "c"];

for (let i of exampleArray) {
  console.log(i);
}

for (let i of "JavaScript") {
  console.log(i);
}
