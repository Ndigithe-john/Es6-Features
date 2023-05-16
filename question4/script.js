'use strict';
// const student_names = ['David', 'Vinoth', 'Divya', 'Ishitha', 'Thomas'];
// const marks = [80, 77, 88, 95, 68];

// const calc_average = function (name, average) {
//   for (let i = 0; i < name.length; i++) {
//     for (let r = 0; r < average.length; r++) {
//       if (average < 60) {
//         console.log(`${name[i]} got ${average[r]} which is grade F`);
//       } else if (average >= 60 && average < 70) {
//         console.log(`${name[i]} got ${average[r]} which is grade D`);
//       }
//     }
//   }
// };
// calc_average(student_names, marks);
// const calc_average = function (name, average) {
//   for (let i = 0; i < name.length; i++) {

//   }
// };
// calc_average(student_names, marks);
// Define the student data
const students = [
  { name: 'David', marks: 80 },
  { name: 'Vinoth', marks: 77 },
  { name: 'Divya', marks: 88 },
  { name: 'Ishitha', marks: 95 },
  { name: 'Thomas', marks: 68 },
];
let totalMarks = 0;
for (let i = 0; i < students.length; i++) {
  totalMarks += students[i].marks;
}
const averageMarks = totalMarks / students.length;
for (let i = 0; i < students.length; i++) {
  let grade;
  if (students[i].marks < 60) {
    grade = 'F';
  } else if (students[i].marks < 70) {
    grade = 'D';
  } else if (students[i].marks < 80) {
    grade = 'C';
  } else if (students[i].marks < 90) {
    grade = 'B';
  } else {
    grade = 'A';
  }
  console.log(`${students[i].name}: ${students[i].marks} - Grade: ${grade}`);
}

console.log(`Average marks: ${averageMarks}`);
