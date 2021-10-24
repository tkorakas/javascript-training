// Create a function that accepts 2 numbers as arguments and returns their sum
function add(a, b) {
  return a + b;
}

// Create a function that accepts N numbers as arguments and returns their sum (Bonus use the Array.reduce method)
function addAll(...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

addAll(1, 2, 3, 4, 5, 6);
