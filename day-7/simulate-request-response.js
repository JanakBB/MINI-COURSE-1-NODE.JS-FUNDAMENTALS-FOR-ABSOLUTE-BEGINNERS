import { timeStamp } from "console";
import http from "http";

// Create a simple server = registered new worker
// callback inside the createServer = if customer comes then you (worker) server this things which available in the restaurant
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, {
    "Content-Type": "application/json",
    "X-Powered-by": "Node.js",
  });

  // Send response body
  const response = {
    message: "Hello from server!",
    timeStamp: new Date().toISOString(),
    yourUrl: req.url,
    yourMethod: req.method,
  };

  res.end(JSON.stringify(response));
});

// Start server on port 3000: listen means open the shop for customer.
server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// Handle graceful shutdown
// SIGINT = OS give signal SIGINT when press Ctrl + C to node.
process.on("SIGINT", () => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("At first Server is closed!");
    process.exit(0);
  });
});
