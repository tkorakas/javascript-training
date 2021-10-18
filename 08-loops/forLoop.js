// Traditional for loop
for (let i = 0; i < 4; i++) {
  console.log(i);
}

for (let i = 5; i >= 0; i--) {
  console.log(i);
}

const exampleArray = ["a", "b", "c", "d", "e"];

for (let i = 0; i < exampleArray.length; i++) {
  console.log(exampleArray[i]);
}

// Break statement
for (let i = 0; i < exampleArray.length; i++) {
  console.log(exampleArray[i]);
  if (exampleArray[i] === "c") {
    break;
  }
}

// Continue statement
for (let i = 0; i < exampleArray.length; i++) {
  if (exampleArray[i] === "b") {
    continue;
  }
  console.log(exampleArray[i]);
}
