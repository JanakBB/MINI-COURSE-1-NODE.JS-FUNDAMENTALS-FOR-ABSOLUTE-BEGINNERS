import fs from "fs";
// Synchronous (Blocking) - Code runs line by line. Each step must finish before next begins. A slow operation freezes everything.
console.log("Step 1");
console.log("Step 2");
console.log("Step 3");

// readFileSync example

console.log("Start reading...");
const data = fs.readFileSync("file.txt");

console.log("File content:", data.toString());

console.log("This runs immediately!");

// Asynchronous (Non-Blocking) - Code starts an operation and moves on. When done, a callback handles the result. Others code keeps running!

// setTimeout example
console.log("Start");
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
console.log("End");

// Asynchronous file read example
console.log("Start reading...");
fs.readFile("file.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log("File content:", data.toString());
});
console.log("This runs immediately!");

// Callbacks: Functions That Run Later
// A callback is a function passed as an argument to another function, to be executed later. Node.js uses the error-first callback patterns: the first argument is always an error (or null if successful).

// Basic callback example
function greet(name, callback) {
  console.log(`Hello ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Anonymous callback (most common)
greet("Bob", function () {
  console.log("See you later!");
});

// Arrow function callback
greet("Charlie", () => {
  console.log("Have a great day!");
});

// setTimeout - delay execution
console.log("Start 11");
setTimeout(() => {
  console.log("Run after 11 second!");
}, 2000);

console.log("End 11");

// setInterval - repeat execution
let count = 0;
const id = setInterval(() => {
  count++;
  console.log(`Tick ${count}`);
  if (count === 5) {
    clearInterval(id);
  }
}, 1000);

// Closure - Closure is the combination of a function and the lexical environment in which it was created, allowing it to access outer scope variables even after that scope has finished execution.

// What is Lexical Environment?
// The lexical environment of a function is the set of variables and functions available in that scope + link to outer scope (if any).
// const largeCountry = "USA" // link to outer scope.
// we can use largeCountry in the inner function.

// Lexical Environment of nepal():
// --------------------------------
// primeMinister → { name: "Balen", age: 35, address: "KTM" }
// mainGoal → function
// --------------------------------

const largeCountry = "USA";

function nepal() {
  const primeMinister = {
    name: "Balen",
    age: 35,
    address: "KTM",
  };
  console.log(primeMinister, largeCountry);
  // return "This text for return from nepal";
  function mainGoal() {
    const development = `Prime Minister ${primeMinister.name} want to develop the whole nation and capital of nepal ${primeMinister.address} as well. And this ${largeCountry} is the large country in the world!`;
    return development;
  }

  return mainGoal;
}

const outer = nepal();

console.log(outer());
