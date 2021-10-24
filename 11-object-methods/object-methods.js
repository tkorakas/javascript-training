const person = {
  age: 28,
  name: "Thanos",
  city: "Athens",
  company: "Agile Actors",
};

// Object.keys()​
console.log(Object.keys(person));

// Object.values()​
console.log(Object.values(person));

// Object.entries()​
console.log(Object.entries(person));

// For in
for (let key in person) {
  console.log(key, person[key]);
}
