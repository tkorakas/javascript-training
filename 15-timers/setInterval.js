// Repeating the execution of a function
setInterval(() => console.log("Hello every 3 seconds"), 3000);

// Stop interval
const intervalId = setInterval(
  () => console.log("Hello every 3 seconds"),
  3000
);
setTimeout(() => {
  clearInterval(intervalId);
}, 4000);
