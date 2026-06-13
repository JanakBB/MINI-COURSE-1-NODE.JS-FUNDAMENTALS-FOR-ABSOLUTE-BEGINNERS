/* An iterator is an object that lets you go through a collection (like an array, string, or custom data) one item at a time using a standard method called next().

Each call to next() returns:

value → the current item
done → whether iteration is finished (true or false)

Think of it like a step-by-step data reader.
*/
//✅ 1. Simple Example (Array Iterator)
const arr = [10, 20, 30];

const iterator = arr[Symbol.iterator]();

console.log(iterator.next()); // { value: 10, done: false }
console.log(iterator.next()); // { value: 20, done: false }
console.log(iterator.next()); // { value: 30, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

//✅ 2. Simple Example (String Iterator)
const text = "Hi";

const iteratorText = text[Symbol.iterator]();

console.log(iteratorText.next()); // { value: "H", done: false }
console.log(iteratorText.next()); // { value: "i", done: false }
console.log(iteratorText.next()); // { value: undefined, done: true }

// 👉 String gives characters one by one.

// ✅ 3. Simple Example (Manual Iterator Object)
function createIterator() {
  let index = 0;
  const data = ["A", "B", "C"];

  return {
    next() {
      if (index < data.length) {
        return { value: data[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const it = createIterator();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 👉 You manually control how iteration works.

// 🔥 4. Medium Example (Custom Range Iterator)
// This is very useful in real projects (pagination, data chunks, etc.)
function rangeIterator(start, end, step = 1) {
  let current = start;

  return {
    next() {
      if (current <= end) {
        const value = current;
        current += step;
        return { value, done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const numbers = rangeIterator(1, 5, 2);

console.log(numbers.next()); // 1
console.log(numbers.next()); // 3
console.log(numbers.next()); // 5
console.log(numbers.next()); // done

// 👉 Output sequence: 1 → 3 → 5 → end

// 🚀 Advanced Example: Pagination Iterator (Very Real Use Case)
// Imagine your backend gives 1000 items, but frontend shows only 10 items per page.
// Instead of manually handling page logic everywhere, we create an iterator that gives one page at a time.
// 📦 Pagination Iterator
function createPaginationIterator(data, pageSize) {
  let page = 0;

  return {
    next() {
      const start = page * pageSize;
      const end = start + pageSize;

      if (start < data.length) {
        const value = data.slice(start, end);
        page++;

        return { value, done: false };
      }

      return { value: undefined, done: true };
    },
  };
}
// 🧪 Using It
const items = Array.from({ length: 25 }, (_, i) => i + 2); // [1, 2, 3, ..., 25]
const paginator = createPaginationIterator(items, 10);
console.log(paginator.next()); // [1–10]
console.log(paginator.next()); // [11–20]
console.log(paginator.next()); // [21–25]
console.log(paginator.next()); // done

const numbers44 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 17, 18, 19, 20, 21, 22,
];
const value44 = numbers44.slice(0, 10);
console.log(value44);
console.log(numbers44);
const value45 = numbers44.slice(10, 20);
console.log(value45);
console.log(numbers44);

const empty44 = Array(30)
  .fill()
  .map((_, i) =>
    i < 1
      ? "a"
      : i < 2
        ? "b"
        : i < 3
          ? "c"
          : i < 4
            ? "d"
            : i < 5
              ? "e"
              : i === 9
                ? "j"
                : i + 1,
  );
console.log("Empty:", empty44);

const result = Array.from({ length: 52 }, (_, i) =>
  i % 2 === 0 ? String.fromCharCode(97 + i / 2) : i + 1,
);

console.log(result);

// 🚀 Best for...of Example (Custom Iterator)
// Let's create our own object that behaves like an array.
const users = {
  data: ["Janak", "Sami", "Ram"],

  [Symbol.iterator]() {
    let index = 0;
    const data = this.data;

    return {
      next() {
        if (index < data.length) {
          return {
            value: data[index++],
            done: false,
          };
        }

        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};

for (const user of users) {
  console.log(user);
}
// Output
// Janak
// Sami
// Ram


// Generator
// ✅ Example 1: Basic Generator
function* numbers22() {
  yield 10;
  yield 20;
  yield 30;
}

const gen = numbers22();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
// Output::
// { value: 10, done: false }
// { value: 20, done: false }
// { value: 30, done: false }
// { value: undefined, done: true }

// ✅ Example 2: Generator with for...of
function* colors() {
  yield "Red";
  yield "Green";
  yield "Blue";
}

for (const color of colors()) {
  console.log(color);
}
// Output:
// Red
// Green
// Blue

// ✅ Example 3: Range Generator
// Instead of manually creating an iterator:

function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (const num of range(1, 5)) {
  console.log(num);
}
// Output:
// 1
// 2
// 3
// 4
// 5