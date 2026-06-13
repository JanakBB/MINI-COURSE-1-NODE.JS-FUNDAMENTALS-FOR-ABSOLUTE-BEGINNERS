// Nullish Coalescing: Smart Defaults
// The problem with || (OR Operator)
const count = 0;
const defaultCount1 = count || 10;
console.log("OR with 0:", defaultCount1);

const name = "";
const defaultName1 = name || "Anonymous";
console.log("Or with empty string: ", defaultName1);

// Nullish coalescing fixes this
const defaultCount2 = name ?? "Anonymous";
console.log("Nullish with empty string:", defaultCount2);

// Nullish vs OR Comparison
const values = [null, undefined, 0, "", false, NaN, "hello", 42];
console.log("Value | OR ( || ) | Nullish (??)");
console.log("---------|------------|---------------");
values.forEach((val) => {
  const orResult = val || "default";
  const nullishResult = val ?? "default";
  console.log(
    `${String(val).padEnd(9)} | ${String(orResult).padEnd(9)} | ${nullishResult}`,
  );
});
