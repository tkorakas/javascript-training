// Class
// class Person {
//   name = "Thanos";
// }
// const thanos = new Person();
// console.log(thanos);

// Constructor
// class Person {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
// }
// const thanos = new Person("Thanos");
// console.log(thanos);

// // Create a method
// class Person {
//   name;
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     console.log("Method:", this.name);
//   }
// }
// const thanos = new Person("Thanos");
// thanos.getName();

// // Inheritance
// class Student extends Person {
//   age;
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }

// const student = new Student("Thanos", 28);
// console.log(student);
// student.getName();

// // getters

// class Person {
//   _name;
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return `My name is ${this._name}`;
//   }
// }

// const thanos = new Person("Thanos");
// console.log(thanos.name);

// // setters
// class Person {
//   _name;
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return `My name is ${this._name}`;
//   }
//   set name(name) {
//     this._name = name.toUpperCase();
//   }
// }

// const thanos = new Person("Thanos");
// thanos.name = "Tasos";
// console.log(thanos.name);

// // static
// class Person {
//   static VERSION = 0.5;
// }

// console.log(Person.VERSION);
