//1. Write a JavaScript program to get an array from the user and return the:
const readline=require('readline-sync')
const input1=readline.question("Enter the array: ")
const array=input1.split(' ').map(Number);
//a) Sum of all elements in the array using reduce()
const totalsum = array.reduce((accumulator, currentValue) => 
{
    return accumulator + currentValue;
}, 0);
console.log(totalsum)
//b) Average of all elements in the array using reduce()
console.log(totalsum/array.length)

//2. Write a JavaScript program to
//a) Calculate grades on basis of marks
const students = [
    { name: "John", marks: 92 },
    { name: "Oliver", marks: 85 },
    { name: "Michael", marks: 79 },
    { name: "Dwight", marks: 95 },
    { name: "Oscar", marks: 64 },
    { name: "Kevin", marks: 48 },
  ];
  function calculateGrade(marks) {
    if (marks > 90) return 'A';
    else if (marks > 80) return 'B';
    else if (marks > 70) return 'C';
    else if (marks > 60) return 'D';
    else if (marks > 50) return 'E';
    else return 'F';
  }
  function groupStudentsByGrade(students) {
    const groupedStudents = {};
  
    students.forEach(student => {
      const grade = calculateGrade(student.marks);
      if (!groupedStudents[grade]) {
        groupedStudents[grade] = [];
      }
      groupedStudents[grade].push({ name: student.name, grade });
    });
  
    return groupedStudents;
  }
  const groupedStudents = groupStudentsByGrade(students);
  console.log(groupedStudents);