// 1

console.log("=== Example 1: Simulating API Call ===");
function fetchUserData(userId, callback) {
  console.log(`Fetching data for user ${userId}...`);

  //Simulate network delay
  setTimeout(() => {
    const userData = {
      id: userId,
      name: `User${userId}`,
      email: `user${userId}@example.com`,
    };
    callback(null, userData);
  }, 2000);
}

fetchUserData(123777, (error, user) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log("User data received:", user);
});

// 2
console.log("\n=== Example 2: Simulating File Processing ===");

function processFile(filename, onSuccess, onError) {
  console.log(`Processing ${filename}`);

  setTimeout(() => {
    const success = Math.random() > 0.3;
    if (success) {
      const result = `Processed content of ${filename}`;
      onSuccess(result);
    } else {
      onError(`Failed to process ${filename}`);
    }
  }, 1500);
}

processFile(
  "file.txt",
  (result) => console.log("Success:", result),
  (error) => console.log(console.error("Error:", error)),
);

// 3
console.log("\n=== Example 3: Multiple callbacks in Sequence ===");

function step1(data, callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback(null, `${data} -> Step 1`);
  }, 3000);
}

function step2(data, callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback(null, `${data} -> Step 2`);
  }, 3000);
}

function step3(data, callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback(null, `${data} -> Step 3`);
  }, 3000);
}

step1("Start", (error, result1) => {
  if (error) return;
  step2(result1, (error, result2) => {
    if (error) return;
    step3(result2, (error, result3) => {
      if (error) return;
      console.log("Final result:", result3);
    });
  });
});

// Promise - A promise is a JavaScript object represent the future result of an asynchronous operation.
// Creating
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Data Loaded");
  } else {
    reject("Failed");
  }
});

// Using Promise
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
