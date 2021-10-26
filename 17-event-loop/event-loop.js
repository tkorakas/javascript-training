console.log("this is the start");

setTimeout(function cb() {
  console.log("this is a msg from call back");
}, 1000);

console.log("this is just a message");

setTimeout(function cb1() {
  console.log("this is a msg from call back 1");
}, 0);

console.log("this is the end");
