// Object anatomy
const me = {
  name: "Thanos",
  age: 28,
};

// Special names using quotes
const person = {
  "first-name": "Thanos",
  age: 28,
};

// Nested objects
const options = {
  color: "red",
  size: {
    width: 100,
    height: 200,
  },
};

// Reference another object
const sizeOptions = {
  width: 100,
  height: 200,
};

const options = {
  color: "red",
  size: sizeOptions,
};

// Shorthand
const size = {
  width: 100,
  height: 200,
};

const options = {
  color: "red",
  size,
};

// Arrays
const delivery = {
  name: "Thanos",
  items: [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 5 },
  ],
};

// Function as value
const person = {
  name: function () {
    console.log("Hello world");
  },
};
