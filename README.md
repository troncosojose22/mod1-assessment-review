# 🧠 Assessment Review: Core JavaScript Concepts

## Focus Topics

- Pure vs. Impure Functions  
- Objects (simple and nested)  
- The Spread Operator  
- Arrays with Nested Objects and Nested Arrays  

**Goal:** Strengthen your understanding of how JavaScript handles data, references, and immutability — all concepts that appear directly on your upcoming assessment.

## 🧩 1. Pure vs. Impure Functions

### Definition

A **pure function**:
- Does **not change (mutate)** data outside of its own scope.
- **Always returns the same output** for the same input.

An **impure function**:

- Changes data outside of itself (mutates arrays, objects, etc.).
- May depend on or modify external state.

### Example

Using the array `nums` we will write 2 versions of a function that returns an array where each element is double the value from the original array. One function will be pure and the other impure.

```js
// input [1, 2, 3]
// output [2, 4, 6]
```

Think about:

- What changes in memory after each call?
- Why is mutation risky in collaborative or large projects?

<details>
  <summary>Answer</summary>

```javascript
let nums = [1, 2, 3];

// ✅ Pure Function
const doublePure = (arr) => {
  const doubled = [];
  for (let i = 0; i < arr.length; i++) {
    doubled.push(arr[i] * 2);
  }
  return doubled;
};

// ❌ Impure Function
const doubleImpure = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
  return arr;
};

console.log(doublePure(nums));  // [2, 4, 6]
console.log(nums);              // [1, 2, 3]
console.log(doubleImpure(nums)); // [2, 4, 6]
console.log(nums);              // [2, 4, 6]
```

</details>

---

## 🧱 2. Objects and Nested Objects

### Simple Objects

Objects group related data together using key-value pairs.

```javascript
const student = {
  name: 'Ava',
  age: 19,
  scores: { math: 95, english: 88 }
};

console.log(student.scores.math); // 95
```

**Guided Question:**

What happens if we change `student.scores.math`? Does the original object change? Why?

### Reference Types 

Assigning an object to a new variable points both variables to the same object.

```javascript
const copy = student;
copy.name = 'Jordan';

console.log(student.name); // "Jordan" — why?
```

✅ **Objects are reference types** — copies share the same reference unless you clone them.

## 🌈 3. The Spread Operator (...)

The spread operator is a quick way to copy arrays or objects and add or override data without mutating the original.

### Arrays
```javascript
const fruits = ['apple', 'banana'];
const moreFruits = [...fruits, 'cherry'];

console.log(moreFruits); // ['apple', 'banana', 'cherry']
console.log(fruits);     // ['apple', 'banana'] — unchanged
```

### Objects
```javascript
const person = { name: 'Nia', age: 20 };
const updatedPerson = { ...person, age: 21 };

console.log(updatedPerson); // { name: 'Nia', age: 21 }
console.log(person);        // { name: 'Nia', age: 20 }
```

### Key Idea
Spreading creates a **shallow copy** — top-level elements are copied, but nested objects or arrays still share references.

**Example of shallow copy effect:**

```javascript
const original = [{ a: 1 }, { b: 2 }];
const copy = [...original];
copy[0].a = 99;
console.log(original[0].a); // 99 — nested object still shares reference
```

---

## 🪞 4. Arrays with Nested Objects and Nested Arrays

These structures appear often in real-world data — and in your assessment!

### Example: Shopping Cart

```javascript
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

```

**Reflection:**

- How can we safely change data without affecting the original gradebook
- How would you access a specific student's score or calculate an average?
- How can we make a deep copy so that nested data doesn't change? Note that you do not need to know this for the assement, but you can take a look at this [resource](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy);

---

## 🧭 Quick Review Prompts

- What makes a function pure in JavaScript?
- Why does assigning an object to a new variable not make a true copy?
- How does the spread operator help keep your code pure?
- What does it mean to make a shallow copy?
- How would you represent a gradebook in code so that each student has a name and multiple quiz scores?
---

## ⚡ Mini Challenges

- Write a pure function that removes the first element from an array without mutating the original.
- Create a copy of this object using the spread operator and change a nested property. What happens?
- Predict the output:

```javascript
const arr = [{ x: 1 }, { y: 2 }];
const arrCopy = [...arr];
arrCopy[1].y = 99;
console.log(arr);
```

---

## 🕓 Q&A Time (15 min)

Use this time to:

- Ask about confusing syntax or concepts
- Test your understanding by explaining one of these ideas out loud
- Clarify any parts of the assessment you're unsure about

### Tip

When in doubt — avoid mutation, use the spread operator, and test your assumptions in the console.

**Your goal is to write code that's clear, predictable, and easy to reason about.**

