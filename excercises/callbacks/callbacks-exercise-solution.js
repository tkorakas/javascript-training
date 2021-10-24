// Create a function that accepts two arguments, an array of numbers and a callback.
// Iterate over the numbers and call the callback with each one of them as an argument
// The callback should accept an argument and print it.
function loop(numbers, callback) {
  for (let number of numbers) {
    callback(number);
  }
}

function callback(number) {
  console.log("The argument is: ", number);
}

loop([1, 2, 3, 4, 5], callback);
