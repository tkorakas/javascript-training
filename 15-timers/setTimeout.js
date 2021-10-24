// Delay the execution of a function
setTimeout(() => {
  console.log("Hello after 4 seconds");
}, 4000);

// Passing function as a reference
function log() {
  console.log("Hello from the log function");
}

setTimeout(log, 4000);

// Passing arguments
function log(message) {
  console.log(message);
}

// We can use: setTimeout(callback, delay, arg1, arg2, arg3, ...)
setTimeout(log, 4000, "Message as argument");

// Cancel setTimeout
const timerId = setTimeout(() => console.log("You will not see this one!"), 0);
clearTimeout(timerId);

// A timer delay is not guaranteed
// setTimeout(() => console.log("Hello after 0.5 seconds. MAYBE!"), 500);
// for (let i = 0; i < 1e10; i++) {
//   // Block Things Synchronously
// }
