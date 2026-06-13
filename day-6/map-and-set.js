// Map: Key-Value Pairs (Better than Objects)
// Map is collection of keyed data items, similar to Object but with important advantages:

// 1 Creating Maps
const userMap = new Map();

// 2 Adding entries
userMap.set("name", "Alice");
userMap.set("age", 30);
userMap.set(true, "boolean key!");

const user = { id: 1 };
userMap.set(user, "Object as key");
console.log("Map:", userMap);

// 3 Getting values
console.log(userMap.get(user));

const map = new Map();

const user1 = { id: 1 };
const user2 = { id: 2 };

map.set(user1, "Alice");
map.set(user2, "Bob");

for (const [key, value] of map) {
  if (key.id === 2) {
    console.log(value); // Alice
  }
}

// Checking existence
console.log("Has 'age'?", userMap.has("age"));

// Deleting entries
userMap.delete("age");

// Clearing all
userMap.clear();

// Map: Objects as Keys
const alice = { name: "Alice" };
const bob = { name: "Bob" };
const scores = new Map();
scores.set(alice, 95);
scores.set(bob, 87);
console.log(scores);

// Map: Iteration
const colors = new Map([
  ["red", "#FF0000"],
  ["green", "#00FF00"],
  ["blue", "#0000FF"],
]);

for (const [key, value] of colors) {
  console.log(`${key} -> ${value}`);
}

// Map methods
console.log("keys:", [...colors.keys()]);
console.log("Values:", [...colors.values()]);
console.log("Entries:", [...colors.entries()]);

// Removing Duplicates
const duplicates = [1, 2, 2, 3, 3, 4, 4, 4, 5, 5, 5, 5, 5];
const unique = [...new Set(duplicates)];
console.log("Original:", duplicates);
console.log("Unique:", unique);

// Set: Operations (Union, Intersection, Difference)
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
//Intersection (A n B)
const intersection = new Set([...setA].filter((x) => setB.has(x)));
console.log(setA);
console.log("[...setA]", [...setA]);
console.log(intersection);
// Union (A u B)
const union = new Set([...setA, ...setB]);
console.log(union);
// Difference
const difference = new Set([...setA].filter((x) => !setB.has(x)));
console.log("Difference", difference);
// Symmetric Difference
const symmetricDiff = new Set([
  ...[...setA].filter((x) => !setB.has(x)),
  ...[...setB].filter((x) => !setA.has(x)),
]);
console.log("Symmetric Difference:", symmetricDiff);
