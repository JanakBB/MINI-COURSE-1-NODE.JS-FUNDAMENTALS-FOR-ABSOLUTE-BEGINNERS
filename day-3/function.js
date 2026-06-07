// Function Declaration

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice"));

// Function Expression
const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(4, 5));

// Arrow Function
const add = (a, b) => a + b;
const double = (x) => x * 2;
const sayHi = () => console.log("Hi");

console.log(add(4, 5));
console.log(double(22));
console.log(sayHi());

function greeting(first, second) {
  return console.log(`Hello ${first} ${second}`);
}

greeting("Janak", "Bohara");

// Default and Rest Parameters

function greetUser(name = "Guest") {
  console.log(`Welcome, ${name}`);
}

greetUser();

function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) total += num;
  return console.log(total);
}

sumAll(1, 2, 3);

// Objects & Arrays: Storing Data
//Object-Key-Value Pairs

const person = {
  name: "Alice",
  age: 33,
  hobbies: ["reading", "gaming"],
  address: {
    city: "New York",
    zip: "11001",
  },
  isStudent: true,
};

//Access properties
console.log(person.name);
console.log(person["age"]);

//Add, updata, delete
person.email = "alice@gmail.com";
person.age = 34;
delete person.isStudent;

//Array-Ordered Lists

const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];

//Access (0-indexed)
console.log(fruits[0]);
console.log(fruits.length);

//Modify
fruits[1] = "blueberry";
fruits.push("grape"); //Add to end
fruits.pop(); // Remove from end

// Essential Array Methods
// map() - Transform - Returns a new array with each element transformed.
const doubled = [1, 2, 3].map((n) => n * 2);
console.log(doubled);

// filter() - Select - Returns a new array with only matching elements.
const evens = [1, 2, 3, 4].filter((n) => n % 2 === 0);
console.log(evens);

// reduce() - Accumulate - Reduces array to a single value.
const sum = [1, 2, 3, 4].reduce((total, n) => total + n, 0);
console.log(sum);

// forEach() - Iterate - Runs code on each element. Does not return a value.
const record = [11, 12, 13, 14].forEach((n) => console.log(n));
console.log(record);

// Destructuring  - Extract Data Easily
// Array Destructuring
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
console.log(first);

//Skip elements
const [, , last] = colors;
console.log(last);

// Object destructuring
const personA = {
  name: "Janak",
  age: 35,
  city: "NYC",
  // email: "janakcustomx@gmail.com",
};

const { name, age } = personA;
console.log(name);

// Rename + defaults
const { name: userName, email = "none@gmail.com" } = personA;

console.log(userName, email);
console.log(personA.email);

// Spread Operator (...) - Expand & Copy - Expand array or object elements. Perfect for copying without referencing the original.
// Combine arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined);

// Copy array (new reference!)
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original);

// Spread with objects
const user1 = {
  name: "Alice",
  age: 25,
};
const user2 = {
  ...user1,
  city: "Boston",
};

console.log(user2);

// Override properties
const updatedObj = {
  ...user1,
  age: 26,
};

console.log(updatedObj);

// Rest Operator (...) - Collect Remaining - Collects remaining elements into an array. Often used in function parameters.
const [first1, second2, ...rest] = [1, 2, 3, 4, 5];
console.log(first1);
console.log(second2);
console.log(rest);

//In function parameters
function sumAll(...numbers) {
  return console.log(numbers.reduce((total, n) => total + n, 0));
}

sumAll(1, 2, 3, 4, 5);

// Control Flow: Directing your code
// if/else if/ else - Checks conditions from top to bottom. First match wins.
const score = 85;
if (score >= 90) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// Switch Statement - Matches one value against many cases. Use break to stop.
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("TGIF");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Midweek");
}

// loops - Repeat Actions - Classic for, while, and modern for ...of for arrays and for ...in for objects.
// Classic for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for ...of (arrays)
const colorsArr = ["red", "green", "blue"];
for (let color of colorsArr) {
  console.log(color);
}

// for ...in (objects)
const personObj = {
  name: "Alice",
  age: 36,
  address: "New York",
};
for (let key in personObj) {
  console.log(`${key}: ${personObj[key]}`);
}

// Break and Continue - break stops the loop entirely. continue skips only the current iteration.
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(i);
}

// While and do ...while - while runs while condition is true. do...while always runs at least once.
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// do...while (runs once minimum)
let num = 10;
do {
  console.log(num);
  num++;
} while (num < 5);

const count1 = 0;
console.log(count1 || 10);
console.log(count1 ?? 10);

// Template Literals - Modern Strings - Use backticks (`) and ${} to embed expressions directly in strings.
const name1 = "Alice";
const age1 = 25;

// Old way (avoid this!)
const oldWay = "Hello, my name1 is" + name1 + "and I am " + age1 + "years old.";
console.log(oldWay);

// Modern way (use this!)
const newWay = `Hello, my name1 is ${name1} and I am ${age1} years old.`;
console.log(newWay);

// Multi-line strings
const multiLine = `
  This is line 1
  This is line 2
  This is line 3
`;
console.log(multiLine);

// Expression inside ${}
const price = 10;
const quantity = 3;
console.log(`Total: $${price * quantity}`);

// Truthy & Falsy - JavaScript Boolean Logic - Only 8 values are falsy. Everything else is truthy - including empty arrays and objects!
// Falsy values (only these 8!)
// false, 0, -0, 0n, "", null, undefined, Nan

// Everything else is truthy
if (true) console.log("Yes");
if (1) console.log("Yes");
if ("hello") console.log("Yes");
if ([]) console.log("Yes");
if ({}) console.log("Yes");

if ("") {
  console.log("Yes1");
} else {
  console.log("No1");
}

console.log(Number.MAX_SAFE_INTEGER);

// Short-circuit with &&
const user = {
  name: "Alice",
};

const displayName = user && user.name;
console.log(displayName);

// Short-circuit with ||
const input22 = "";
const result22 = input22 || "default value";
console.log(result22);

// Nullish coalescing ?? (only null/undefined)
const count55 = 0;
const count66 = null;
console.log(count55 || 10);
console.log(count55 ?? 10);
console.log(count66 ?? 10);

// Ternary Operator - Shorthand if/else
const age77 = 18;
const status77 = age >= 18 ? "adult" : "minor";
console.log(status77);

// Nested ternary (use sparingly!)
const score88 = 85;
const grade88 =
  score88 >= 90 ? "A" : score88 >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade88);

// Better for complex logic - use if/else
let message;
if (score88 >= 90) message = "Excellent";
else if (score88 >= 70) message = "Good";
else message = "Keep trying";

console.log(message);

// Ternary in arrow function
const isEven = (n) => (n % 2 === 0 ? "Even" : "Odd");
console.log(isEven(5));

//Challenge 1: Shopping Cart Total
// Calculate the total price of all items in a shopping cart using reduce().

const cart = [
  { name: "Shirt", price: 25, quantity: 2 },
  { name: "Pants", price: 40, quantity: 1 },
  { name: "Socks", price: 5, quantity: 3 },
];

const totalPriceOfCart = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0,
);
console.log(`Total Price: $${totalPriceOfCart}`);

//Challenge 2: Find Most Expensive Product
//Use reduce() to find the product with the highest price.

const products = [
  { name: "Phone", price: 699 },
  { name: "Tablet", price: 399 },
  { name: "Laptop", price: 1299 },
];

// reduce automatically put
const maxPrice = products.reduce((max, product) =>
  product.price > max.price ? product : max,
);
console.log(maxPrice);

// Or

const maxPrice2 = products.reduce(
  (max, product) => (product.price > max.price ? product : max),
  products[0],
);
console.log(maxPrice2);

// Challenge 3: Palindrome Checker

//Write a function that checks if a word reads the same backward and forward.

function isPalindrome(word) {
  const cleaned = word.toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  console.log(cleaned, reversed);
  return cleaned === reversed;
}

console.log(isPalindrome("racecar"));
