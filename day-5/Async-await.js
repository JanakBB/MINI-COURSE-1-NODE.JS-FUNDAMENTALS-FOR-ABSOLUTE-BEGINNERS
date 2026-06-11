// Regular function returns a number.
function getNumber() {
  return 42;
}

console.log(getNumber());

// Async function ALWAYS returns a Promise.
async function getNumberAsync() {
  return 42;
}

console.log(getNumberAsync());

// Getting the actual value
// All three are same
getNumberAsync().then((value) => {
  console.log(value);
});

getNumberAsync().then((value) => {
  return console.log(value);
});
getNumberAsync().then((value) => console.log(value));

//Each return becomes the input of the next .then().
getNumberAsync()
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    return value + 16;
  })
  .then((value) => console.log(value));

// Async function throwing error - rejected promise
async function throwError() {
  throw new Error("Something went wrong!");
}

throwError().catch((error) => console.log(error.message));

// await
// Without await (using then)
function getData() {
  return fetchUer(1).then((user) => {
    console.log(user);
    return user;
  });
}

// With await (much cleaner)
async function getData() {
  const user = await fetchUser(1);
  console.log(user);
  return user;
}
// 1. Pauses the execution of the async function
async function test() {
  console.log("Start");

  await new Promise(resolve =>
    setTimeout(resolve, 2000)
  );

  console.log("End");
}

test();

// Now output:
// Start
// (wait 2 seconds)
// End

// 2. Waits for the Promise to resolve
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function main() {
  console.log("Waiting...");

  const result = await getData();

  console.log(result);
}

main();

// Output after 2 seconds:
// Waiting...
// Data received

// Flow:
// getData()     ↓
// Promise Pending     ↓
// await waits     ↓
// Promise Fulfilled     ↓
// Continue execution

// 3. Returns the resolved value
// Without await:
async function test() {
  const value = Promise.resolve(100);
  console.log(value);
}

test();

// Output:
// Promise { 100 }
// You get the Promise object.

// With await:
async function test() {
  const value = await Promise.resolve(100);
  console.log(value);
}

test();

// Output:
// 100
// await unwraps the Promise and gives you the resolved value.

// 4. Can only be used inside async function
// ❌ Invalid:
function test() {
  const value = await Promise.resolve(10);
}

// Error:
// SyntaxError
// because await is not inside an async function.

// ✅ Valid:
async function test() {
  const value = await Promise.resolve(10);
  console.log(value);
}

test();

// Output:
// 10




