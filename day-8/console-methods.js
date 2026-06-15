// Advance Console Methods

// 1. console.error() - For errors (stderr): cer
console.error(" This is an error message");
console.error("Error: Failed to connect to database");

// 2. console.warn() - For warnings: cwa
console.warn("Warning: Deprecated function called");
console.warn("Warning: API rate limit at 80%");

// 3. console.info() - For information (often same as log)
console.info("Info: Server started on port 3000");

// 4. console.debug() - For debug message (hidden by default): cdb
console.debug("Debug: Variable x = 42");

// 5. console.table() - Display arrays/objects as tables: ctl
const userTable = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "user" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "user" },
];

console.table(userTable);
// Table with specific columns
console.table(userTable, ["name", "email"]);

// console.time() / console.timeEnd() - Performance timing: ctm, cte
// Measure execution time
console.time("loop");
let sum = 0;
for (let i = 1; i < 1000000; i++) {
  sum += i;
}

console.timeEnd("loop");
// Multiple timers
console.time("task1");
console.time("task2");
setTimeout(() => {
  console.timeEnd("task2");
}, 500);
setTimeout(() => {
  console.timeEnd("task1");
}, 1000);

// 7. console.trace() - See where function was called
function functionA() {
  functionB();
}

function functionB() {
  functionC();
}

function functionC() {
  console.trace("Called from functionC");
}

// functionA();

// console.group() / console.groupEnd() - Group related logs
console.group("User Authentication");
console.log("Checking credentials...");
console.log("Validating password...");
console.log("Creating session...");
console.groupEnd();

// Nested groups
console.group("API Request");
console.log("GET /api/users");
console.group("Headers");
console.log("Authorization: Bearer token123");
console.log("Accept: application/json");
console.groupEnd();
console.group("Response");
console.log("Status: 200 OK");
console.log("Body: {...}");
console.groupEnd();
console.groupEnd();

// 9. console.count() - Count how many times called
function processItem(item) {
  console.count(`Processing ${item.type}`);
  // Process item...
}

processItem({ type: "user" });
processItem({ type: "product" });
processItem({ type: "user" });
processItem({ type: "user" });
processItem({ type: "user" });
processItem({ type: "product" });

// Reset counter
console.countReset("Processing user");
processItem({ type: "user" });

// 10. console.assert() - Conditional logging: log only if condition is false: cas
const age = 15;
console.assert(age >= 18, "User must be 18 or older");
const userData = { name: "Alice" };
console.assert(userData.email, "User should have an email"); // Assertion failed: User should have an email

// 11. console.dir() - Detailed object inspection: Detailed object view
const complexObject = {
  name: "App",
  config: {
    nested: {
      deep: {
        value: "hidder",
      },
    },
  },
  methods: {
    start() {},
    stop() {},
  },
};
console.log("Normal console.log:", complexObject);
console.dir(complexObject, { depth: null, colors: true });
console.dir(complexObject, { depth: 2, showHidden: true });

// 12. Custom console styling (Node.js)
console.log("\n🎨 Styled console output:");

const styles = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
};
console.log("\x1b[31m\x1b[1mError:\x1b[0m Something went wrong");

console.log(
  `${styles.red}${styles.bold}Error:${styles.reset} Something went wrong`,
);
console.log(`${styles.green}Success:${styles.reset} Operation completed`);
console.log(`${styles.yellow}Warning:${styles.reset} Disk space low`);
console.log(`${styles.cyan}Info:${styles.reset} Server running`);

// 13. Practical: Debug helper function
function debug(level, ...args) {
  const levels = {
    error: { icon: "❌", color: styles.red },
    warn: { icon: "⚠️", color: styles.yellow },
    info: { icon: "ℹ️", color: styles.cyan },
    debug: { icon: "🐛", color: styles.dim },
  };

  const config = levels[level] || levels.info;
  const timestamp = new Date().toLocaleTimeString();
  console.log(
    `${config.color}[${timestamp}] ${config.icon} ${level.toUpperCase()}:${styles.reset}`,
    ...args,
  );
}

debug("info", "Server started on port 3000");
debug("warn", "Memory usage at 85%");
debug("error", "Failed to connect to database");
debug("debug", "Variable x =", 42);

console.log(
  "\n💡 Tip: In Node.js, you can use DEBUG environment variable to filter logs",
);
console.log("   DEBUG=* node app.js  # Show all debug logs");
console.log("   DEBUG=error, warn node app.js  # Show only error and warn");
