// Constructing an array
const somePersons = new Array("Petros", "Maria", "Manolis");
// using the literal notation
const persons = ["Eleni", "Giorgos", "Alex"];
// or just fill the newly created array with Array.protorype.fill()
const nullArray = Array(4).fill(null);

console.log(somePersons);
console.log(persons);
console.log(nullArray);

// Arrays have properties
console.log(persons.length);

// Arrays are indexed starting from 0
console.log(
  persons[2], // "Alex"
  persons[3] // undefined
);

// Arrays are dynamic...
persons[15] = "Mad Max";
console.log(persons.length, persons);

delete persons[1];
console.log(persons.length, persons);

// Arrays have methods
persons.includes("Eleni");
