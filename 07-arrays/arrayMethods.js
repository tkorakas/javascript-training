// Array methods
const myArray = ["a", "b", "c", "d", "e"];
const myNumArray = [1, 2, 3, 4, 5, 6];

// map
console.log(
  "map:",
  myArray.map((item) => item + "+")
);

console.log(
  "map (2):",
  myArray.map((item, index) => item + "-" + index)
);

// filter
console.log(
  "filter",
  myNumArray.filter((item) => item % 2 === 0)
);

// reduce
console.log(
  "reduce:",
  myNumArray.reduce((a, b) => a + b)
);

// concat
console.log("concat", myArray.concat(myNumArray));

// forEach
console.log(
  "forEach",
  [1, 2, 3].forEach((item) => alert(item))
);

// every
console.log(
  "every",
  myNumArray.every((item) => item > 0)
);

console.log(
  "every (2)",
  myNumArray.every((item) => item > 2)
);

console.log(
  "every (3)",
  [].every((item) => item > 0)
);

// some
console.log(
  "some",
  myNumArray.some((item) => item > 2)
);

// reverse
console.log("reverse", myArray.reverse());

// common operation for reversing a string
console.log("reverse (2)", "Anastasios".split("").reverse().join(""));
