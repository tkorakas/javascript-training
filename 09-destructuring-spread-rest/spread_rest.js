// spread
const nums = [1, 3, 4, 5, 6, 8];

const sum = (...numbers) => numbers.reduce((a, b) => a + b);

console.log(sum(nums));

// array concatenation
const othernums = [10, 20];
const newNums = [...nums, ...othernums];

console.log(newNums);
