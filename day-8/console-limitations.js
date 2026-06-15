// Problem 1: Objects are logged by reference: Chrome DevTool
const user = {
  name: "Alice",
  age: 30,
};
console.log("Before change:", user);
user.age = 31;
console.log("After change:", user);
// Both logs show age: 31! (reference issue)

// Problem 2: Can't see execution flow easily
function complexFunction(a, b) {
  const result1 = a * b; // if we know result1, we must console.log() here!
  const result2 = result1 + 10;
  const result3 = result2 / 2;
  return3;
}
// Too many console.logs needed to track flow

// Problem 3: No conditional breakpoints
for (let i = 0; i < 1000; i++) {
  // Can't easily stop when i === 500
  if (i === 500) console.log("Fount it!");
}

// Problem 4: Performance impact
console.time("1000 logs");
for (let i = 0; i < 1000; i++) {
  console.log(i); // Slows down execution significantly
}
console.timeEnd("1000 logs");

// Problem 5: Cluttered output
console.log("Debug: user is", user);
console.log("Debug: another variable", someVar);
console.log("Debug: data", data);
console.log("Debug: response", response);
console.log("Debug: products", products);
console.log("Debug: cart", cart);
console.log("Debug: order", order);
// Hard to read and find specific logs
