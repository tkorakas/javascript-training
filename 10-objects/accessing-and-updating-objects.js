// Dot notation

// Read person name
const person = {
  name: "Thanos",
  age: 28,
};

// person.name
console.log(person.name);

// Update value

person.name = "Tasos";
console.log(person.name);

// Access a non existing value
console.log(person.city);

// Create a new property
person.city = "Thessaloniki";
console.log(person.city);

// Accessing nested objects
const options = {
  color: "red",
  size: {
    width: 100,
    height: 200,
  },
};

// Access a nested non existing value
console.log(options.storage.format);

// Access a non existing value safely
console.log(person?.storage?.format);

// Create nested property
options.storage = {
  format: "pdf",
};

// Bracket notation
// Accessing nested objects
const options = {
  color: "red",
  size: {
    width: 100,
    height: 200,
  },
};

console.log(options[color]);

// Access a nested property
console.log(person["size"]["height"]);

// Accessing fields dynamicly
let field;
if (false) {
  field = "size";
} else {
  field = "color";
}
console.log(options[field]);

// Destructuring
const { color } = options;
console.log(color);

// Rename the destructured property
const { color: myColor } = options;
console.log(myColor);

// Rest operator
const { color: myColor, ...otherProperties } = options;
console.log(myColor, otherProperties);

// Spread operator
const userOptions = {
  ...options,
  userName: "Thanos",
};
console.log(userOptions);

// Object.assign
const userOptions = Object.assign(options, { userName: "Thanoss" });
console.log(userOptions);
