// catName("Tiger");

console.log("catName1", catName);

function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tiger");

// console.log('catName',catName)
// var catName = function(name) {
//   console.log("My cat's name is " + name);
// }
// catName("Tiger");

// console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
// var num; // Declaration
// let num;
// const num;
// var num = 6;

// x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
// console.log(x + " " + y); // '1 undefined'
// // This prints value of y as undefined as JavaScript only hoists declarations
// var y = 2; // Declare and Initialize y

// // Example 2
// // No hoisting, but since initialization also causes declaration (if not already declared), variables are available.

// a = 'Cran'; // Initialize a
// b = 'berry'; // Initialize b

// console.log(a + "" + b); // 'Cranberry'
