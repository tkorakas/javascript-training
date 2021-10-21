// Write a program which computes the average marks. Then, use this average to determine the corresponding grade.
// Ranges <60 -> F, <70 -> D, <80 -> C, <90 -> B, <100 -> A
const students = [
  ["David", 80],
  ["Vinoth", 77],
  ["Divya", 88],
  ["Ishitha", 95],
  ["Thomas", 68],
];

for (let student of students) {
  const grade = student[1];
  const name = student[0];

  if (grade < 60) {
    console.log(name, "F");
  } else if (grade < 70) {
    console.log(name, "D");
  } else if (grade < 80) {
    console.log(name, "C");
  } else if (grade < 90) {
    console.log(name, "B");
  } else {
    console.log(name, "A");
  }
}

// for (let i = 0; i < students.length; i++) {
//   let grade = students[i][1];
//   if (grade < 60) {
//     console.log(students[i], "F");
//   } else if (grade < 70) {
//     console.log(students[i][0], "D");
//   } else if (grade < 80) {
//     console.log(students[i][0], "C");
//   } else if (grade < 90) {
//     console.log(students[i][0], "B");
//   } else {
//     console.log(students[i][0], "A");
//   }
// }
