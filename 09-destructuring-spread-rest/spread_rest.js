// spread
const nums = [1, 3, 4, 5, 6, 8];

// array concatenation
const othernums = [10, 20];
const newNums = [...nums, ...othernums];

console.log(newNums);

// rest
const [first, ...rest] = nums;

console.log("first:", first);
console.log("rest:", rest);
