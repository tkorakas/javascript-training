// // Add event listener
// document.querySelector("html").addEventListener("click", function () {
//   alert("Hey !");
// });

// Change event
// const selectElement = document.querySelector(".ice-cream");

// selectElement.addEventListener("change", (event) => {
//   const result = document.querySelector(".result");
//   result.textContent = `You like ${event.target.value}`;
// });

// // Remove event listener
// function clickHandler() {
//   console.log("clicked");
// }
// document.querySelector("p").addEventListener("click", clickHandler);
// document.querySelector("p").removeEventListener("click", clickHandler);

// Event Propagation
// document.querySelector("p").addEventListener(
//   "click",
//   function (evt) {
//     alert("p clicked");
//   },
//   true
// );

// document.querySelector("div").addEventListener("click", function (evt) {
//   alert("div clicked");
// });

// document.querySelector("form").addEventListener("click", function (evt) {
//   alert("form clicked");
// });
