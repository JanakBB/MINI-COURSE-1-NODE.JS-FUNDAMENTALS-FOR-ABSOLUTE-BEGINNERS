// Simulate different types of failures
function riskyOperation(operationName, shouldFail, failType = "error") {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!shouldFail) {
        resolve(`${operationName} completed successfully!`);
      } else {
        if (failType === "network") {
          reject(
            new Error(`Network error: Cannot connect to ${operationName}`),
          );
        } else if (failType === "validation") {
          reject(
            new Error(`Validation error: Invalid data for ${operationName}`),
          );
        } else {
          reject(new Error(`Unknown error in ${operationName}`));
        }
      }
    }, 500);
  });
}

// Example 1: Basic try/catch:
async function basicErrorHandling() {
  try {
    const result = await riskyOperation("Database query", true, "network");
    console.log("Result: ", result);
  } catch (error) {
    console.error("Catch error: ", error.message);
  }
}

basicErrorHandling();

// Example 2: Specific error handling:
async function specificErrorHandling() {
  try {
    await riskyOperation("Login", true, "validation");
    await riskyOperation("Fetch", false);
  } catch (error) {
    if (error.message.includes("Network")) {
      console.error("Network issue - check your connection");
    } else if (error.message.includes("Validation")) {
      console.error("Validation failed - check you input");
    } else {
      console.error("Unknown error: error.message");
    }
  }
}


// 0.3.6 Common Async Patterns and Anti-patterns
// Pattern 1: Parallel Execution (Good)
// ✅ GOOD - Run independent operations in parallel
async function loadDashboard() {
    const [user, posts, notifications] = await Promise.all([
        fetchUser(),
        fetchPosts(),
        fetchNotifications()
    ]);
    return { user, posts, notifications };
}
// Anti-pattern 1: Sequential When Not Needed (Bad)
// ❌ BAD - Running independent operations sequentially
async function loadDashboardSlow() {
    const user = await fetchUser();        // Wait 1s
    const posts = await fetchPosts();      // Wait another 1s
    const notifications = await fetchNotifications(); // Wait another 1s
    // Total: 3 seconds when it could be 1 second!
    return { user, posts, notifications };
}
// Pattern 2: Promise.allSettled for Partial Failures
// ✅ GOOD - Continue even if some operations fail
async function loadWithGracefulDegradation() {
    const results = await Promise.allSettled([
        fetchCriticalData(),
        fetchNonCriticalData(),
        fetchAnalytics()
    ]);
    
    const critical = results[0].status === 'fulfilled' ? results[0].value : null;
    const nonCritical = results[1].status === 'fulfilled' ? results[1].value : {};
    const analytics = results[2].status === 'fulfilled' ? results[2].value : null;
    
    return { critical, nonCritical, analytics };
}
// Pattern 3: Caching Async Results
// ✅ GOOD - Cache expensive operations
const cache = new Map();

async function fetchWithCache(key, fetchFunction) {
    if (cache.has(key)) {
        console.log(`Cache hit for ${key}`);
        return cache.get(key);
    }
    
    console.log(`Cache miss for ${key}, fetching...`);
    const data = await fetchFunction();
    cache.set(key, data);
    return data;
}
// Pattern 4: Timeouts with Async/Await
// ✅ GOOD - Add timeout to any async operation
async function withTimeout(promise, ms, errorMessage = "Operation timed out") {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error(errorMessage)), ms);
    });
    
    return Promise.race([promise, timeoutPromise]);
}

// Usage
async function fetchWithTimeout() {
    try {
        const data = await withTimeout(
            fetchUser(1), 
            2000,
            "User fetch took too long!"
        );
        console.log("Data received:", data);
    } catch (error) {
        console.error("Failed:", error.message);
    }
}
// Anti-pattern 2: Forgetting Await
// ❌ BAD - Missing await
async function getUser() {
    const user = fetchUser(1);  // Missing await! Returns Promise, not user
    console.log(user);  // Promise { <pending> }
    return user;
}

// ✅ GOOD
async function getUser() {
    const user = await fetchUser(1);
    console.log(user);  // Actual user object
    return user;
}
// Anti-pattern 3: Async in Loops (Sequential by Mistake)
// ❌ BAD - Runs sequentially (takes N * delay time)
async function processItemsSequential(items) {
    const results = [];
    for (const item of items) {
        results.push(await processItem(item));  // Waits for each one
    }
    return results;
}

// ✅ GOOD - Runs in parallel
async function processItemsParallel(items) {
    const promises = items.map(item => processItem(item));
    return await Promise.all(promises);
}

// ✅ BEST - With concurrency limit for large datasets
async function processItemsWithLimit(items, limit = 5) {
    const results = [];
    for (let i = 0; i < items.length; i += limit) {
        const batch = items.slice(i, i + limit);
        const batchResults = await Promise.all(batch.map(item => processItem(item)));
        results.push(...batchResults);
    }
    return results;
}



// Common Mistakes & Best Practices
// Mistake 1: Async Function Without Await
// ❌ BAD - Async function with no await (unnecessary)
async function getNumber() {
    return 42;  // Wrapped in Promise unnecessarily
}

// ✅ GOOD - Regular function for sync code
function getNumber() {
    return 42;
}
// Mistake 2: Using Await in Non-Async Function
// ❌ BAD - Syntax error!
function getData() {
    const user = await fetchUser(); // Error: await only in async function
}

// ✅ GOOD
async function getData() {
    const user = await fetchUser();
    return user;
}
// Mistake 3: Forgetting that Async Functions Return Promises
// ❌ BAD - Expecting direct value
async function getUser() {
    return { name: "Alice" };
}
const user = getUser(); // user is a Promise, not the object!
console.log(user.name); // undefined

// ✅ GOOD
const userPromise = getUser();
userPromise.then(user => console.log(user.name));

// OR
const user = await getUser(); // In another async function
// Best Practice 1: Use Promise.all for Independent Operations
// ✅ GOOD - Parallel execution
async function loadPage() {
    const [header, content, footer] = await Promise.all([
        fetchHeader(),
        fetchContent(),
        fetchFooter()
    ]);
    return { header, content, footer };
}
// Best Practice 2: Handle Errors at Appropriate Level
// ✅ GOOD - Error handling at the top level
async function main() {
    try {
        await runApp();
    } catch (error) {
        console.error("Application error:", error);
        process.exit(1);
    }
}
// Best Practice 3: Use Async/Await Over Raw Promises for Readability
// ✅ GOOD - More readable
async function saveUser(userData) {
    const validated = await validateUser(userData);
    const saved = await saveToDatabase(validated);
    await sendEmail(saved.email);
    return saved;
}

// ❌ Less readable (callback hell light)
function saveUserPromise(userData) {
    return validateUser(userData)
        .then(validated => saveToDatabase(validated))
        .then(saved => sendEmail(saved.email).then(() => saved));
}