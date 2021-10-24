// Write a script to print the message “Hello World” every second, but only 5 times.
// After 5 times, the script should print the message “Done” and let the Node process exit.
let counter = 0;
const intervalId = setInterval(() => {
  console.log("Hello World");
  counter += 1;
  if (counter === 5) {
    console.log("Done");
    clearInterval(intervalId);
  }
}, 1000);
