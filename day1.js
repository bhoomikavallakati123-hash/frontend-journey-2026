// =============================
// day1.js — JavaScript Experiments
// Hoisting • Block Scope • Console Tests
// =============================

console.log("=======Hoisting examples=======");

// ---- var hoisting-----
console.log("\n --var hoisting --");
console.log(a);
var a = 10;
console.log(a);

// What actually happens internally:
// var a;
// console.log(a);
// a = 10;

// --- let hoisting ---
console.log("\n --- let hoisting ---");
try {
  console.log(b); // Temporal dead zone Reference error
} catch (err) {
  console.log("Error:", err.message);
}
let b = 20;
console.log(b);

// --- const hoisting ---
console.log("\n-- const hoisting --");
try {
  console.log(c);
} catch (err) {
  console.log("Error:", err.message);
}
const c = 30;
console.log(c);
