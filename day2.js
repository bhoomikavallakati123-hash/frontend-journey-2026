// =============================
// day2.js — Functions, Closures, Lexical Scope
// Run with: node day2.js
// =============================

console.log("===== FUNCTION BASICS =====");

// function declaration
function add(a, b) {
  return a + b;
}
console.log("add:", add(2, 3));

// function expression
const multiply = function (a, b) {
  return a * b;
};
console.log("multiply:", multiply(3, 4));

// arrow function
const subtract = (a, b) => a - b;
console.log("subtract:", subtract(10, 5));

// =============================
console.log("\n===== FUNCTION HOISTING =====");

hoisted(); // works

function hoisted() {
  console.log("I am hoisted");
}

try {
  notHoisted();
} catch (err) {
  console.log("Error:", err.message);
}

var notHoisted = function () {
  console.log("I am NOT hoisted fully");
};

// =============================
console.log("\n===== LEXICAL SCOPE =====");

let globalVar = "I am global";

function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(globalVar);
    console.log(outerVar);
  }

  inner();
}

outer();

// =============================
console.log("\n===== CLOSURE BASIC =====");

function makeCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("count:", count);
  };
}

const counter1 = makeCounter();
counter1();
counter1();
counter1();

const counter2 = makeCounter();
counter2(); // separate memory

// =============================
console.log("\n===== CLOSURE WITH PARAMETERS =====");

function createAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = createAdder(5);
console.log("add5:", add5(10));
console.log("add5 again:", add5(20));

const add10 = createAdder(10);
console.log("add10:", add10(5));

// =============================
console.log("\n===== PRIVATE VARIABLES USING CLOSURE =====");

function bankAccount(initial) {
  let balance = initial;

  return {
    deposit(amount) {
      balance += amount;
      console.log("balance:", balance);
    },
    withdraw(amount) {
      balance -= amount;
      console.log("balance:", balance);
    },
    getBalance() {
      console.log("balance:", balance);
    },
  };
}

const account = bankAccount(100);
account.deposit(50);
account.withdraw(30);
account.getBalance();

// cannot access directly
console.log("direct access:", account.balance); // undefined

// =============================
console.log("\n===== LOOP + CLOSURE TRAP =====");

console.log("\n-- var version --");
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 100);
}

console.log("\n-- let version --");
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 100);
}

// fix var using closure
console.log("\n-- fix var with closure --");
for (var k = 0; k < 3; k++) {
  (function (kCopy) {
    setTimeout(() => console.log("fixed k:", kCopy), 100);
  })(k);
}

// =============================
console.log("\n===== LEXICAL SCOPE CHAIN =====");

let name = "global";

function level1() {
  let name = "level1";

  function level2() {
    let name = "level2";

    function level3() {
      console.log("name:", name);
    }

    level3();
  }

  level2();
}

level1();

// =============================
console.log("\n===== CLOSURE INTERVIEW PUZZLE =====");

function weird() {
  let x = 10;

  return function () {
    console.log("x:", x);
    x++;
  };
}

const w = weird();
w();
w();
w();

// =============================
console.log("\n===== FUNCTION FACTORY =====");

function power(exp) {
  return function (num) {
    return num ** exp;
  };
}

const square = power(2);
const cube = power(3);

console.log("square:", square(4));
console.log("cube:", cube(2));

// =============================
console.log("\n===== END OF DAY 2 =====");
