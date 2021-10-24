// Named function
function hello() {
  console.log("Hello world");
}
hello();

// Return a value
function hello() {
  return "Hello world";
}
const message = hello();
console.log(message);
// Anonymous function
const hello = function () {
  console.log("Hello world");
};
hello();

// Arrow function
const hello = () => {
  console.log("Hello world");
};
hello();

// Return a value
const hello = () => {
  return "Hello world";
};
const message = hello();

// Implicit return
const hello = () => "Hello world";
const message = hello();

// Implicit return with objects
const hello = () => ({
  name: "Thanos",
});
const message = hello();
