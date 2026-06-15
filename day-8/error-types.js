// 1. ReferenceError
console.log(userName);
// ReferenceError: userName is not defined


// 2. TypeError
const user = null;
console.log(user.name);
// TypeError: Cannot read properties of null (reading 'name')


// 3. SyntaxError
// NOTE:
// SyntaxError prevents the entire file from running, so don't actually uncomment this unless you want to see the error.
const age = ;

// 4. RangeError
const arr = new Array(-1);
// RangeError: Invalid array length

// 5. ENOENT
const fs = require("fs");
fs.readFileSync("users.txt");
// Error: ENOENT: no such file or directory

// 6. ECONNREFUSED
const http = require("http");
http.get("http://localhost:3000");
// Error: connect ECONNREFUSED 127.0.0.1:3000

// 7. EADDRINUSE
// Run this file in TWO terminals simultaneously.
const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello");
});
server.listen(3000);
// Error: listen EADDRINUSE: address already in use :::3000

// 8. MODULE_NOT_FOUND
require("expresss");
// Error: Cannot find module 'expresss'
