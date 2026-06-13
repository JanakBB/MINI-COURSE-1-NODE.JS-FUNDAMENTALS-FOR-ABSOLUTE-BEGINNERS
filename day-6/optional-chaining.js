// Optional Chaining: Safe Property Access
// The problem: Nested property access errors
const user = {
  name: "Alice",
  // address is missing!
};
// console.log("Direct get nested property:", user.address.city);
const city = user.address ? user.address.city : undefined;
console.log("Old way:", city);
// With optional chaining (elegant!)
const city2 = user.address?.city;
console.log("Optional chaining:", city2);

// Multiple Levels
const company = {
  name: "TechCorp",
  ceo: {
    name: "Bob",
    contact: {
      address: "New York",
      email: "bob@techcrop.com",
    },
  },
};

// what does ceo?. mean?
// "Check whether ceo exists before trying to access contact."
// .   = "Go get this property."
// ?.  = "Go get this property ONLY IF the previous value exists."
// company.ceo → undefined
// Sees ?.
// Stops immediately
// Returns undefined

// It never tries to read .contact or .email.

const ceoEmail = company.ceo?.contact?.email;
console.log("CEO email:", ceoEmail);

// Works with function calls
const result = user.getName?.();
console.log("User getName?:", result);

// Optional Chaining with Arrays
const users = [{ name: "Alice" }, { name: "Bob" }];
// Safe array access
const thirdUser = user[2]?.name;
console.log("Third user: ", thirdUser);
// Safe method call
const result2 = users?.map?.((u) => u.name);
// users?.map?.((u) => u.name)
// │      │
// │      └─ Is map available? If yes, call it.
// │
// └─ Does users exist? If yes, continue.
console.log("Map result:", result2);
// Optional chaining with dynamic properties
function getNestedValue(obj, path) {
  return path.split(".").reduce((current, key) => {
    console.log("This is current:", current);
    return current?.[key];
  }, obj);
}

const data = {
  user: {
    profile: {
      name: "Alice",
    },
  },
};

console.log(getNestedValue(data, "user.profile.name"));
console.log(getNestedValue(data, "user.address.city"));

const result22 = [1, 2, 3, 4, 5].reduce((current, value) => {
  console.log("This is current value:", current);
  return current + value;
}, 22);
console.log(result22);

// Practical: API Response Handling
// Simulating unpredictable API response
const apiResponses = [
  {
    data: {
      user: {
        name: "Alice",
        email: "alice@example.com",
      },
    },
  },
  {
    data: {
      user: null,
    },
  },
  {
    error: "Not found",
  },
  {
    data: {},
  },
];

apiResponses.forEach((response, i) => {
  const userName = response.data?.user?.name ?? "Unknown";
  const userEmail = response.data?.user?.email ?? "No email";
  console.log(`Response ${i + 1}: ${userName} (${userEmail})`);
});

// Optional Chaining vs && Operator
const config = {
  database: {
    connection: {
      host: "localhost",
    },
  },
};

// Using && (older approach)
const host1 =
  config &&
  config.database &&
  config.database.connection &&
  config.database.connection.host;

// Using ?. (modern approach)
const host2 = config?.database?.connection?.host;
console.log("Both produce same result:", host1 === host2);
// Key difference : ?. short-circuits and returns undefined
