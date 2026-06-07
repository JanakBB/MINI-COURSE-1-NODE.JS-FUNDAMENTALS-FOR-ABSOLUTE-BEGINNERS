console.log("Hello from Node.js");
console.log("Node version:", process.version);
console.log("Working directory:", process.cwd());

const appName = "My CLI Tool";
const MAX_USERS = 100;

let currentUserCount = 0;
let userInput = "";

// String-Text
const name = "Alice";
const phone = "9868747299";

// Number-Math
const age = 25;
const price = 9.99;
const big = 5e6;

// Boolean-True/False
const isLoggedIn = true;
const hasPermission = false;

// Undefined & Null
let notSet;
let empty = null;

// Object-Collections
const person = {
  name: "Bob",
  age: 30,
};

// Array - Lists
const colors = ["red", "green", "blue"];

// Type Coercion (Automatic)
console.log("5" + 3);
console.log("5" - 3);
console.log(1 + "1");
console.log("hello" * 2);

// Type Conversion (You Control It)
// To Number
console.log(Number("123"));
console.log(parseInt("123px"));
console.log(parseFloat("12.5"));

// To String
console.log(String(456));

// To Boolean
console.log(Boolean(0));
console.log(Boolean("hello"));
console.log(Boolean(""));

// Basic Arithmetic
const a = 10;
const b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Modulo (%) - Very Useful!
console.log(10 % 2);
console.log(11 % 2);
console.log(123 % 10);
console.log(13 % 12);
// Use % 2 to check even/odd. Use % 10 to get the last digit.

// Assignment Shorthand
let x = 5;
console.log((x += 5));
console.log((x -= 3));
console.log((x *= 2));
console.log((x /= 2));
console.log((x %= 3));

// Comparison Operators
const p = 5;
const q = "5";

console.log(p == q);
console.log(p === q);
console.log(p !== q);
console.log(p > 3);
console.log(q > 3);
console.log(p <= 5);

// Challenge 1: Temperature
// Convert Celsius to Fahrenheit: F = (C * 9/5) + 32
let Celsius = 25;
let F = (Celsius * 9) / 5 + 32;
console.log(F);

// Challenge 2: Even or odd
let number = 17;
console.log(number % 2);

// Challenge 3: Swap Variables
let num1 = 5;
let num2 = 10;

num1 = num2;
console.log(num1);
num2 = num1;
console.log(num2);

// Challenge 4: Age in Days
let ageInYears = 25;
let ageInDays = 25 * 365;
console.log(ageInDays);
