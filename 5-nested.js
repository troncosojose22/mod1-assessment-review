const gradebook = [
  {
    studentName: "Andrew A.",
    quizScores: [86, 91, 88, 82],
  },
  {
    studentName: "Emily B.",
    quizScores: [78, 82, 85, 89],
  },
  {
    studentName: "James C.",
    quizScores: [92, 88, 90, 86],
  },
];

// Access nested data
console.log(gradebook[1].quizScores[2]); // 85 — Emily B.'s 3rd quiz score

// Shallow copy of the gradebook array
const gradebookCopy = [...gradebook];
gradebookCopy[0].studentName = "Andrew Z.";

console.log(gradebook[0].studentName); // "Andrew Z." 😱 — why?
