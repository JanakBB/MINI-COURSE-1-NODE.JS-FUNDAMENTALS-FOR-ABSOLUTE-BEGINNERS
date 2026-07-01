import readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

rl.prompt();

rl.on("line", (line) => {
  const cmd = line.trim().toLowerCase();
  switch (cmd) {
    case "hello":
      console.log("Hello, Developer!");
      break;
    case "time":
      console.log("Current time:", new Date().toLocaleTimeString());
      break;
    case "date":
      console.log("Current date:", new Date().toLocaleDateString());
      break;
    case "exit":
      console.log("GoodBye!");
      rl.close();
      break;
    default:
      console.log("Unknown command. Try: hello, time, date, exit");
  }
  rl.prompt();
});

rl.on("close", () => {
  process.exit(0);
});
