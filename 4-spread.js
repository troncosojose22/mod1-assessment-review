const fruits = ['apple', 'banana'];
const moreFruits = [...fruits, 'cherry'];

console.log(moreFruits); // ['apple', 'banana', 'cherry']
console.log(fruits);     // ['apple', 'banana'] — unchanged

const person = { name: 'Nia', age: 20 };
const updatedPerson = { ...person, age: 21 };

console.log(updatedPerson); // { name: 'Nia', age: 21 }
console.log(person);        // { name: 'Nia', age: 20 }


const original = [{ a: 1 }, { b: 2 }];
const copy = [...original];
copy[0].a = 99;
console.log(original[0].a); // 99 — nested object still shares reference
