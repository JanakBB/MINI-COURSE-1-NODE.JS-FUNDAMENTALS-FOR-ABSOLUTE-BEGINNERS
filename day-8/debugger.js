// Code to debug with node.js inspector debugger.js
// Node.js Built-in Debugger Demo

// A function with a bug we need to find
// f5, then f10

function calculateTotalPrice(items) {
  let subtotal = 0;
debugger
  for (let i = 0; i <= items.length; i++) {
    subtotal += items[i].price * items[i].quantity;
  }

  return subtotal;
}

const mobiles = [
  { name: "iphone", price: 333, quantity: 4 },
  { name: "laptop", price: 444, quantity: 5 },
];

console.log(calculateTotalPrice(mobiles));


