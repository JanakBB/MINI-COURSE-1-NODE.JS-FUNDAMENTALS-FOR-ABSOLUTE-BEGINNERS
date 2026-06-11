// Simulate API call
function fetchUser(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: userId,
        name: `User${userId}`,
      });
    }, 4000);
  });
}

// Async function using await
// condition 1: Modern code syntax
async function getUser() {
  const user = await fetchUser(11);
  console.log(user);
}
getUser();

// condition 2: Simple promise handle code syntax
fetchUser(22).then((result) => {
  console.log(result);
});

// Conclusion: Both are correct and both get resolved value.

//Example 2: Multiple Awaits
function step1(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${input} -> Step 1`);
    }, 500);
  });
}
function step2(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${input} -> Step 2`);
    }, 500);
  });
}
function step3(input) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${input} -> Step 3`);
    }, 500);
  });
}

async function processWorkFlow() {
  const result1 = await step1("Start");
  const result2 = await step2(result1);
  const result3 = await step3(result2);
  return result3;
}

processWorkFlow().then((result) => {
  console.log(result);
});

// Example 3: Async/Await with Promise Methods
function delay(ms, value) {
  // return new Promise((resolve) => setTimeout(() => resolve(value), ms));
  // or both are same
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
}

async function loadAllData() {
  console.time("Parallel loading");
  const [data1, data2, data3] = await Promise.all([
    delay(2000, "Data from AIP 1"),
    delay(1500, "Data from AIP 2"),
    delay(1000, "Data from AIP 3"),
  ]);
  console.timeEnd("Parallel loading");
  console.log({ data1, data2, data3 });
}

loadAllData();
