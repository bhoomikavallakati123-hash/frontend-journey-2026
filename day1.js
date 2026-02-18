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

// --function declaring hoisting--
console.log("\n --function declaration hoisting--");
sayHello();
function sayHello() {
  console.log("Hello from function declaration");
}

// --function expression hoisting--

console.log("\n --function expression hoisting--");
try {
  greet();
} catch (err) {
  console.log("Error:", err.message);
}

var greet = function () {
  console.log("Hello from function expression");
};

greet();

// =============================

console.log("\n===== BLOCK SCOPE =====");
// --- var ignores block ---
console.log("\n-- var in block --");
if (true) {
  var x = 100;
}
console.log("x:", x); // 100 (not block scoped)

// --- let is block scoped ---
console.log("\n-- let in block --");
if (true) {
  let y = 200;
  console.log("inside block y:", y);
}
try {
  console.log(y);
} catch (err) {
  console.log("Error:", err.message);
}

// --- const block scope ---
console.log("\n-- const in block --");
{
  const z = 300;
  console.log("inside block z:", z);
}
try {
  console.log(z);
} catch (err) {
  console.log("Error:", err.message);
}

// --- shadowing ---
console.log("\n-- variable shadowing --");
let value = "outer";

{
  let value = "inner";
  console.log("inside block:", value);
}

console.log("outside block:", value);

// --- illegal shadowing ---
// console.log("\n-- illegal shadowing --");
// try {
//   let q = 1;
//   {
//     var q = 2; // cannot shadow let with var in same scope chain
//   }
// } catch (err) {
//   console.log("Error:", err.message);
// }

// =============================
console.log("\n===== TRY TO BREAK THINGS =====");

// --- accessing before declaration ---
console.log("\n-- temporal dead zone test --");
try {
  testTDZ();
} catch (err) {
  console.log("Error:", err.message);
}

function testTDZ() {
  try {
    console.log(foo);
  } catch (e) {
    console.log("inner error:", e.message);
  }
  let foo = "TDZ";
}

// --- reassign const ---
console.log("\n-- const reassignment --");
try {
  const pi = 3.14;
  pi = 10;
} catch (err) {
  console.log("Error:", err.message);
}

// --- block vs function scope ---
console.log("\n-- block vs function scope --");

function scopeTest() {
  if (true) {
    var m = "var";
    let n = "let";
  }

  console.log("m:", m);

  try {
    console.log("n:", n);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

scopeTest();

// --- loop scope ---
console.log("\n-- loop scope --");

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 100);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 100);
}

// =============================
console.log("\n===== END OF DAY 1 EXPERIMENTS =====");
