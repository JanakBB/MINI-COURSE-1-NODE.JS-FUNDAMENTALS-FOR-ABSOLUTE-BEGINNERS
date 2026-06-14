// Anatomy of an HTTP Request
// Request Structure:An HTTP request consists of a Request Line (method, path, version), Headers (metadata), an empty line, and an optional Body containing data sent to the server.
console.log("Request Line: Method + Path + HTTP Version");
// Request Line: The Request Line is the first line of an HTTP request that specifies the method, the target path (URL), and the HTTP version used.
// Method: An HTTP method defines the action the client wants to perform on a resource, such as reading, creating, updating, or deleting data.
// Path: The path is the part of a URL that specifies the exact resource or page the client wants to access on a server.
// HTTP Version: HTTP version defines the protocol rules used between client and server to exchange requests and responses, such as HTTP/1.1, HTTP/2, and HTTP/3.

/*
    1. https://www.example.com/products?id=123
    This is a FULL URL.
    It includes everything:
    https://www.example.com/products?id=123
    │      │                │
    │      │                └── Path + Query
    │      └────────────────── Domain (Host)
    └────────────────────────── Protocol (HTTPS)
    This is what you type in the browser.

    2. GET /products?id=123 HTTP/1.1
    This is a HTTP Request Line, not a full URL.
    GET /products?id=123 HTTP/1.1
    It is used inside the HTTP request sent to the server.
*/

/*
    Key Difference
    Full URL	                       Request Line
    *******                          ************
    Used by browser/user	           Used inside HTTP protocol
    Includes protocol + domain	     Only path + query
    External view	                   Internal communication
*/

/*
    Why are they different?
    Because of client-server separation

    Step 1: You type URL
    https://www.example.com/products?id=123
    Browser now parses it:
    Protocol → https
    Host     → www.example.com
    Path     → /products
    Query    → id=123

    Step 2: Browser sends HTTP request
    Now it converts it into:
    GET /products?id=123 HTTP/1.1
    Method: GET
    Path: /products
    Query: id=123
    Version: HTTP/1.1
    Host: www.example.com
*/

/*
    Simple Summary
    URL = “Where to go (complete address)”
    Request Line = “What to do after you arrive”
*/

console.log("Request Headers");
// Request Headers: Request headers are metadata (extra information) sent from the client to the server that describe the request, the client, and how the server should handle the request.
console.log("Host");
// Host: Host = "Which website are you talking to?"
console.log("User-Agent");
// User-Agent = information about the client (browser, operating system, and device) that is making the HTTP request.
console.log("Accept");
//Accept is a request header that tells the server what type of response format the client can understand or prefers to receive.
console.log("Authorization");
//Authorization is an HTTP request header that sends credentials (such as a JWT token or API key) to prove the client's identity and permissions.
console.log("Content-Type");
//Content-Type is an HTTP header that tells the receiver what format the request body or response body is in.

// Anatomy of an HTTP Response
// An HTTPS response is the message sent by a server to a client, containing a status line, headers, and a body, all transmitted securely through TLS encryption.
console.log("Status Line");
//A Status Line is the first line of an HTTP/HTTPS response that tells the client the HTTP version and whether the request was successful, redirected, or failed.
console.log("HTTP/1.1");
// HTTP/1.1 is the second major version of HTTP that defines how web browsers and servers communicate, adding improvements such as persistent connections, required Host headers, and better performance compared to HTTP/1.0.
console.log("Status Code");
// A Status Code is a 3-digit number in an HTTP/HTTPS response that tells the client whether the request was successful, redirected, or failed, and what type of result occurred.
console.log("Status Message");
//A status message is a short text in an HTTP response that describes the meaning of the status code in human-readable form, such as "OK", "Not Found", or "Internal Server Error".
console.log("Response Headers");
//Response headers are key-value pairs sent by the server in an HTTP response that provide metadata about the response, such as content type, caching rules, cookies, and security information.
console.log("Content-Type");
// Content-Type is an HTTP header that tells the client or server what type of data is being sent, such as HTML, JSON, image, or text.
console.log("Content-Length");
//Content-Length is an HTTP header that specifies the size of the response body in bytes so the browser knows how much data to expect.
console.log("Cache-Control");
//Cache-Control is an HTTP header that defines how and for how long a response can be stored in cache to improve performance or ensure fresh data.
