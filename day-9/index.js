import readline from "readline/promises";
import chalk from "chalk";
import { displayWelcome, showHelp, formatResult } from "./src/utils.js";
import { loadHistory, saveHistory, addToHistory } from "./src/history.js";
import { calculate, advancedOps } from "./src/calculator.js";

let history = [];
let memory = 0;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function prompt() {
  try {
    const input = await rl.question(chalk.cyan("> "));
    const cmd = input.trim().toLowerCase();

    if (cmd === "exit" || cmd === "quit") {
      console.log(chalk.yellow("\nGoodbye! 👋"));
      await saveHistory(history);
      rl.close();
      return;
    }

    if (cmd === "help") {
      showHelp();
    } else if (cmd === "history") {
      if (history.length === 0) {
        console.log(chalk.gray("No history yet."));
      } else {
        console.log(chalk.yellow("\nHistory:"));
        history.slice(0, 10).forEach((entry, i) => {
          console.log(`${i + 1}. ${entry}`);
        });
      }
    } else if (cmd === "clear") {
      console.clear();
      displayWelcome();
    } else if (cmd === "m+" || cmd === "m-") {
      console.log(chalk.gray("Memory feature coming in v2!"));
    } else if (input.trim() !== "") {
      try {
        let result;

        // Handle sqrt function
        if (input.includes("sqrt(")) {
          const match = input.match(/sqrt\((\d+(\.\d+)?)\)/); //"Does the text look like sqrt(number)?"
          if (match && match[1]) {
            const num = parseFloat(match[1]);
            result = advancedOps.sqrt(num);
          } else {
            throw new Error("Invalid sqrt syntax. Use sqrt(16)");
          }
        }
        // Handle power
        else if (input.includes("^") || input.includes("**")) {
          result = calculate(input);
        }
        // Normal calculation
        else {
          result = calculate(input);
        }

        const entry = formatResult(input, result);
        console.log(entry);
        addToHistory(entry, history);
      } catch (err) {
        console.log(chalk.red(`❌ ${err.message}`));
      }
    }

    // Continue the loop
    prompt();
  } catch (error) {
    console.error(chalk.red("Error:", error.message));
    prompt();
  }
}

// Start the app
async function start() {
  try {
    history = await loadHistory();
    console.clear();
    displayWelcome();
    showHelp();
    prompt();
  } catch (err) {
    console.error(chalk.red("Failed to start calculator:"), err.message);
  }
}

start();

// Bonus: Support direct expression from command line
if (process.argv.length > 2) {
  const expr = process.argv.slice(2).join(" ");
  try {
    const result = calculate(expr);
    console.log(formatResult(expr, result));
    process.exit(0);
  } catch (e) {
    console.error(chalk.red(e.message));
    process.exit(1);
  }
}
