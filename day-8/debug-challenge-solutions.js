// debug-challenge-solutions.js - The fixed version

// Solution 1: Fix loop condition (<= should be <)
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    // Fixed: < not <=
    sum += numbers[i];
  }
  return sum;
}

// Solution 2: Return average, not sum
function calculateAverage(numbers) {
  const sum = calculateSum(numbers);
  const average = sum / numbers.length;
  return average; // Fixed: return average
}

// Solution 3: Add locking for race condition
let counter2 = 0;
let lock = false;

async function incrementCounterFixed() {
  while (lock) {
    await new Promise((resolve) => setTimeout(resolve, 1));
  }
  lock = true;

  try {
    const current = counter2;
    await new Promise((resolve) => setTimeout(resolve, 10));
    counter2 = current + 1;
  } finally {
    lock = false;
  }
}

// Solution 4: Promise needs to resolve or reject
function createWorkingPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved!");
    }, 100);
  });
}

// Solution 5: Fix typo in variable name
function processUserFixed(user) {
  const userName = user.name;
  const userEmail = user.email; // Fixed: userEmail not userEmial
  const userAge = user.age;

  return {
    name: userName,
    email: userEmail, // Fixed: use correct variable
    age: userAge,
  };
}

// Solution 6: Add increment to loop
function findFirstEvenNumberFixed(numbers) {
  let i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      return numbers[i];
    }
    i++; // Fixed: increment i
  }
  return null;
}

// Solution 7: Add error handling
async function fetchDataFixed() {
  try {
    const response = await fetch("https://nonexistent-api.xyz/data");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error.message);
    return null; // Return fallback value
  }
}
