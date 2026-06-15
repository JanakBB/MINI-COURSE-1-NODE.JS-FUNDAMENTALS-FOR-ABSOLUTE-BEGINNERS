let cache = [];

function addData() {
  cache.push(new Array(10).fill("data"));
  console.log(cache);
}

setInterval(addData, 1000);
