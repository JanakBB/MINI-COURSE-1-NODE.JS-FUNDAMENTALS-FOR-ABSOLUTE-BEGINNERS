export const calculate = (expression) => {
  try {
    // let expression = "2(3+4) + 10(5+1)";
    // 2 * (3+4) + 10 * (5+1)
    let sanitized = "";
    for (let i = 0; i < expression.length; i++) {
      let current = expression[i];
      let next = expression[i + 1];
      sanitized += current;
      if (!isNaN(current) && next === "(") {
        sanitized += "*";
      }
    }

    const result = eval(sanitized);

    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid result");
    }

    return Number(result.toFixed(8));
  } catch (err) {
    throw new Error(`Invalid expression: ${expression}`);
  }
};

export const advancedOps = {
  sqrt: (x) => Math.sqrt(x),
  pow: (x, y) => Math.pow(x, y),
  factorial: (n) => {
    if (n < 0 || !Number.isInteger(n)) {
      throw new Error("Factorial only for non-negative integers");
    }
    return n === 0 ? 1 : n * advanceOps.factorial(n - 1);
  },
  pi: () => Math.PI,
  e: () => Math.E,
};
