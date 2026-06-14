// When you type https://www.example.com into your browser, here's what happens:

// Step 1: URL Parsing: Extracting information from a URL by separating it into parts like protocol, host, path, query parameters, and fragment.

console.log("  https://www.example.com/products?id=123#view");
console.log(" |--- https: (protocol - HyperText Transfer Protocol Secure)");
//HTTP  = Normal communication between client and server
// HTTPS = Locked and encrypted communication 🔒 between client and server
console.log(" |--- www.example.com (domain name)");
// Domain name: A domain name is the easy-to-remember name of a website that points to its server's IP address through DNS.
// Part	Name:
// www	- Subdomain
// google	- Domain Name
// .com	- Top-Level Domain (TLD)

// IP Address: An IP address is a unique numerical address that identifies a device on a network and allows data to be sent to the correct destination.

// Domain Name = Website's Name
// IP Address  = Website's Actual Address

console.log(" |--- /products (path)");
// Path: A path is the part of a URL after the domain that specifies the exact page, file, API endpoint, or resource being requested from the server.

console.log(" |--- ?id=123 (query parameters)");
// Query parameters: Query parameters are key-value pairs added after ? in a URL to send extra information such as filters, search terms, sorting options, pagination, or settings.

console.log(" |--- #view (fragment)");
// Fragment: the part after # that points to a specific location or state inside the current page.

// Step 2: Browser checks cache
console.log(" -DNS cache (IP address remembered?)");
// DNS: DNS (Domain Name System) is the service that translates domain names like google.com into IP addresses so browsers can find and connect to the correct server on the Internet.
// DNS cache: DNS Cache is a temporary memory that stores domain-name-to-IP-address mappings so devices can connect to websites faster without repeatedly querying DNS servers.
// DNS Lookup: Lookup means searching for a piece of information and retrieving the result. In "DNS Lookup," it means searching DNS records to find the IP address of a domain name.
console.log(" - Browser cache (page already loaded?)");

// Step 3: DNS Lookup (Domain -> IP Address)
console.log(" Browser -> DNS Resolver -> DNS Server");
// DNS Resolver: A DNS Resolver is the server that receives a domain-name request (like google.com), finds the corresponding IP address, and returns it to your browser.
console.log(" Where is www.example.com?");
console.log(" 'It's at 93.184.216.34'");

// Step 4: TCP Connection (3-way handshake)
// TCP: TCP (Transmission Control Protocol) is a reliable communication protocol that establishes a connection and ensures data is delivered completely, correctly, and in the correct order between devices on a network.
// TCP Connection: A TCP Connection is a reliable communication channel established between a client and a server using a three-way handshake before any data is exchanged.
// 3-way handshake: The TCP 3-Way Handshake is the process of establishing a reliable connection using three messages: SYN → SYN-ACK → ACK. After these three steps, the client and server can safely exchange data.
console.log(" Client: SYN (I want to connection)");
// SYN: SYN(Synchronize) is a TCP message sent by a client to request the start of a connection with a server.
// Synchronize: Synchronize means to coordinate two systems so they work together in the same timing or order. In TCP, it means preparing both client and server to start communication in a coordinated way.
console.log(" Server: SYN-ACK (Ok, let's connect");
// SYN-ACK: SYN-ACK(Synchronize-Acknowledgement) is the TCP response from a server during the 3-way handshake that confirms it received the connection request and is ready to establish a connection.
// Client: A client is any device or application that requests data or services from a server in a network.
// Server: A server is a computer or system that provides data, services, or resources to other computers (called clients) over a network. So, the server is a system that receives requests from clients, processes them, and sends back data or services over a network.
console.log(" Client: ACK (Connection established)");

// Step 5: TLS Handshake (for HTTPS): A TLS Handshake is the process where a browser and server agree on security settings, verify identities, and create encryption keys before exchanging HTTPS data.
// TLS: TLS (Transport Layer Security) is the security protocol that encrypts and protects data exchanged between a client and a server, and it is the technology behind HTTPS.
console.log(" - Client: 'I want secure connection'");
console.log(" - Server: 'Here's my certificate'");
console.log(" - Client: 'Certificate verified'");
console.log(" - Both: 'Now we have encryption keys'");
// SSL or TLS certificate:  A TLS certificate is a digital identity card for a website. It helps browsers verify that they are communicating with the real website and enables secure HTTPS encryption.
// Encryption: Encryption is the process of transforming readable data into unreadable data so that only someone with the correct key can convert it back and read it.

// Step 6: HTTP Request
console.log(" Client sends HTTP request to server");
console.log(" GET /products?id=123 HTTP/1.1");
// HTTP/1.1: HTTP/1.1 is a version of HTTP that defines how browsers and servers exchange web requests and responses, with improvements such as persistent (keep-alive) connections for better performance.
console.log(" Host: www.example.com");
// Host: A host is the part of a URL that identifies the server or website you want to connect to, such as google.com or api.myapp.com.

// Step 7: Server Processes Request
console.log(" - Parse request");
// Parse request: Parsing a request means reading an incoming request and breaking it into structured parts (method, path, headers, query parameters, body, etc.) so the server can understand and process it.
console.log(" - Route to handler");
// Route to handler: "Route to handler" means matching an incoming request (such as GET /users) to the specific function that should process it and generate the response.
console.log(" - Query database");
// Query database: database query is a request sent to a database to read, insert, update, or delete data.
console.log(" - Generate HTML/JSON");
// Generate HTML/JSON: Generating HTML means creating webpage markup to display in a browser. Generating JSON means creating structured data to send to applications, frontend code, or APIs.

// Step 8: HTTP Response
console.log(" Server sends back response");
// Server sends back response: A server response is the data (HTML, JSON, images, files, etc.) that the server sends back to the client after processing a request.
console.log(" HTTP/1.1 200 OK");
// HTTP/1.1 200 OK: HTTP/1.1 200 OK is the first line of a successful HTTP response. It means the server received the request, processed it correctly, and is sending back the requested data.
console.log(" Content-Type: text/html");
// Content-Type: text/html: Content-Type: text/html is an HTTP header that tells the browser the response contains HTML and should be rendered as a web page.
console.log(" <html>...content...</html>");
// <html>...content...</html>: <html>...</html> is the outermost container of an HTML document. It tells the browser that everything inside is part of a webpage and should be interpreted as HTML.

// Step 9: Browser Renders
console.log(" - Parse HTML");
// Parse HTML: Parsing HTML is the process where the browser reads HTML code, understands the tags and structure, builds the DOM tree, and prepares the webpage for display.
console.log(" - Download CSS/JS/images");
// Download CSS/JS/images: "Download CSS/JS/images" means that after parsing HTML, the browser finds references to external files and sends additional HTTP requests to fetch those CSS, JavaScript, and image resources from the server.
// CDN - A CDN (Content Delivery Network) is a network of geographically distributed servers that store and deliver website files (images, CSS, JavaScript, videos, etc.) from locations closer to users, improving speed and reliability.
console.log(" - Execute JavaScript");
// Execute JavaScript: Executing JavaScript means the browser's JavaScript engine reads the JavaScript code and runs its instructions, causing actions such as calculations, API requests, event handling, and page updates.
console.log(" - Display to user");

console.log("All this happens every time you click a link");
