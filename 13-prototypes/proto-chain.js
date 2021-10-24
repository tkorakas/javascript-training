// The almighty __proto__
// const person = {
//   name: "Thanos",
//   getName: function () {
//     console.log("Method:", this.name);
//   },
// };
// console.log(person.name);
// person.getName();

// Create a new object
// const anotherPerson = Object.create(person);
// console.log(anotherPerson);
// console.log(anotherPerson.name);
// console.log(anotherPerson.__proto__);
// console.log(anotherPerson.__proto__.name);

// Proto chain
// console.log("Proto", anotherPerson.__proto__.__proto__);
// console.log("Proto", anotherPerson.__proto__.__proto__.__proto__);

// Override properties
// anotherPerson.name = "Tasos";
// console.log(anotherPerson);
// anotherPerson.getName();

// Add new properties
// const anotherPerson = Object.create(person, {
//   name: {
//     value: "Tasos",
//   },
// });

// Constructor
// function Person(name) {
//   this.name = name;
// }

// // Create a new instance
// const thanos = new Person("Thanos");
// const tasos = new Person("Tasos");

// console.log(thanos.name);
// console.log(tasos.name);

// Add getName method

// function Person(name) {
//   this.name = name;
//   this.getName = function () {
//     console.log("Method:", this.name);
//   };
// }

// const thanos = new Person("Thanos");
// const tasos = new Person("Tasos");

// // Method created multiple times
// console.log(thanos, tasos);

// Using prototype
function Person(name) {
  this.name = name;
}

// const thanos = new Person("Thanos");
// const tasos = new Person("Tasos");

// Method created multiple times
// console.log(thanos, tasos);

Person.prototype.getName = function () {
  console.log("Method:", this.name);
};

// thanos.getName();
// tasos.getName();

// Inheritance

function Student(name, age) {
  Person.call(this, name);
  this.age = age;
}

// const student = new Student("Thanos", 28);
// console.log(student.name);
// student.getName(); // Error

// Link to prototype
Student.prototype = Object.create(Person.prototype);
const student = new Student("Thanos", 28);
student.getName();
console.log(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.log(Student.prototype.constructor);

// Define a new method
Student.prototype.learn = function () {
  console.log("JavaScript is awesome");
};

const anotherStudent = new Student("Bill", 30);
anotherStudent.learn();
