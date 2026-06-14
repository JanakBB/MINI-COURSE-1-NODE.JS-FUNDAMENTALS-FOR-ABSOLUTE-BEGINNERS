function describeStatus(code) {
  const statuses = {
    200: "OK: The request succeeded!",
    201: "Created: New resource created",
    204: "No Content: Success but nothing to return",
    400: "Bad Request: You sent invalid data",
    401: "Unauthorized: Please log in",
    403: "Forbidden: You don't have permission",
    404: "Not Found: That resource doesn't exist",
    429: "Too Many Requests: Slow down!",
    500: "Internal Server Error: Something broke on the server",
    502: "Bad Gateway: Upstream server failed",
    503: "Service Unavailable: Server is down for maintenance",
  };

  return `${code} ${statuses[code]}` || `${code}: Unknown status code`;
}

console.log(describeStatus(200));
