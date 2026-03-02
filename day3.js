// map
// filter
// reduce

// Do these tasks:

// Task 1

// Double numbers:

// [1,2,3,4] → [2,4,6,8]
// Task 2

// Filter adults:

// age > 18
// Task 3

// Total price using reduce:

// [{price:100},{price:200}] → 300
// Task 4 (important)

// Convert array of names to uppercase.

// =============================
// day3.js — map, filter, reduce
// =============================

console.log("===== DAY 3: map • filter • reduce =====");

// -----------------------------
// Task 1
// Double numbers:
// [1,2,3,4] → [2,4,6,8]
// -----------------------------

console.log("\n--- Task 1: Double Numbers ---");

const numbers = [1, 2, 3, 4];

const doubled = numbers.map((num) => num * 2);

console.log("Original:", numbers);
console.log("Doubled:", doubled);

// -----------------------------
// Task 2
// Filter adults (age > 18)
// -----------------------------

console.log("\n--- Task 2: Filter Adults ---");

const people = [
  { name: "John", age: 17 },
  { name: "Alice", age: 22 },
  { name: "Bob", age: 30 },
  { name: "Eve", age: 15 },
];

const adults = people.filter((person) => person.age > 18);

console.log("All People:", people);
console.log("Adults:", adults);

// -----------------------------
// Task 3
// Total price using reduce
// [{price:100},{price:200}] → 300
// -----------------------------

console.log("\n--- Task 3: Total Price ---");

const products = [{ price: 100 }, { price: 200 }];

const total = products.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log("Products:", products);
console.log("Total:", total);

// -----------------------------
// Task 4 (Important)
// Convert array of names to uppercase
// -----------------------------

console.log("\n--- Task 4: Uppercase Names ---");

const names = ["john", "alice", "bob"];

const uppercased = names.map((name) => name.toUpperCase());

console.log("Original:", names);
console.log("Uppercased:", uppercased);

// =============================
// EXTRA PRACTICE (Optional)
// =============================

console.log("\n--- Bonus: Chain map + filter ---");

// Double only even numbers
const mixed = [1, 2, 3, 4, 5, 6];

const result = mixed.filter((n) => n % 2 === 0).map((n) => n * 2);

console.log("Mixed:", mixed);
console.log("Even Doubled:", result);

// =============================
console.log("\n===== END OF DAY 3 =====");

const number = [2, 4, 6, 8];

const num = number.map((n) => n + 1);

console.log("first:", number);
console.log("second", num);

const numbe = [2, 4, 6, 8];

const numb = numbe.filter((n) => n > 4);

console.log("first", numbe);
console.log("second:", numb);

const users = [
  { name: "Ravi", age: 22 },
  { name: "Aman", age: 16 },
  { name: "Sita", age: 25 },
];
const us = users.reduce((acc, curr) => {
  acc.push(curr.name);
  return acc;
}, []);
