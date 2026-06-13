// Import default export (no braces)
import calculate, { PI, add, subtract, multiply, divide } from "./math.js";

// Import everything as a namespace
import * as Constants from "./constants.js";

// Import specific items
import { User, validateEmail } from "./user.js";

// Renaming imports
import { HTTP_STATUS as Status } from "./constants.js";

// Modules Demo
// Constants:
console.log("PI:", PI);
console.log("API URL:", Constants.API_BASE_URI);
console.log("Default timeout:", Constants.DEFAULT_TIMEOUT);

// Math Operations:
console.log("Add: 5 + 3 =", add(5, 3));

// User Class:
const user = new User("alice123", "alice@example.com", "secret123");
console.log("Username:", user.username);
console.log("Email:", user.email);
console.log(user);

console.log("Valid emial:", validateEmail("text@example.com"));
console.log("Authentication:", user.authenticate("secret123"));
console.log("Auth attempts:", user.getLoginAttempts());

// Status Codes:
console.log("OK:", Status.OK);
