import chalk from "chalk";

export const displayWelcome = () => {
  console.log(chalk.bold.cyan("\n Welcome to Node Calculator"));
  console.log(chalk.gray("Type help for commands | exit to quit\n"));
};

export const showHelp = () => {
  console.log(chalk.yellow("\nAvailable Commands:"));
  console.log(" help        - Show this help");
  console.log(" history     -  Show calculator history");
  console.log(" clear       - Clear screen");
  console.log(" exit        - Exit calculator");
  console.log(chalk.gray("\You can also type expressions directly:"));
  console.log(" 23 + 45 * 2");
  console.log(" 2 ** 8");
  console.log(" sqrt(16)");
};

export const formatResult = (expr, result) => {
  return `${chalk.green(expr)} = ${chalk.bold.magenta(result)}`;
};
