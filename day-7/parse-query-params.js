const url = new URL(
  " https://api.example.com:8080/api/users?page=2&limit=10#profile",
);
console.log(url);
/*
    URL {
    href: 'https://api.example.com:8080/api/users?page=2&limit=10#profile',
    origin: 'https://api.example.com:8080',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'api.example.com:8080',
    hostname: 'api.example.com',
    port: '8080',
    pathname: '/api/users',
    search: '?page=2&limit=10',
    searchParams: URLSearchParams { 'page' => '2', 'limit' => '10' },
    hash: '#profile'
  }
*/

const params = {};
url.searchParams.forEach((value, key) => {
  params[key] = value;
});

console.log(params);
/*
    { page: '2', limit: '10' }
*/

// Build request url
function buildUrl(base, path, params = {}) {
  const url = new URL(path, base); // At first path then base
  Object.entries(params).forEach(([key, value]) => {
    //obj: [ [ 'page', '222' ], [ 'limit', '102' ] ]
    url.searchParams.append(key, value);
  });
  return url.toString();
}

console.log(
  buildUrl("https://api.example.com", "/users", { page: 1, limit: 10 }),
);

/*
    Object.keys()      // Get all property names
    Object.values()    // Get all property values  
    Object.entries()   // Get both keys AND values
    Object.assign()    // Copy properties
    Object.freeze()    // Make object immutable
*/
