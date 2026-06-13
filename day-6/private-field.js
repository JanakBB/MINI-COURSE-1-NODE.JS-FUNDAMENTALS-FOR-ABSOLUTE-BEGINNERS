// Private Class fields: True Encapsulation
// Without private fields (convention-based, not enforced)
class BankAccountOld {
  constructor(owner, balance) {
    this.owner = owner;
    this._balance = balance; // Convention: "private" but still accessible
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
    }
  }
}

const accountOld = new BankAccountOld("Alice", 1000);
console.log("Balance (old):", accountOld.getBalance());
console.log("Direct access:", accountOld._balance); // Still works! (not truly private)

// With private fields (truly private)
class BankAccount {
  // Private fields (declared with #)
  #balance;
  #transactionHistory = [];
  #accountNumber;

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
    this.#accountNumber = this.#generateAccountNumber();
    this.#logTransaction("Account created", initialBalance);
  }

  // Private method
  #generateAccountNumber() {
    return `ACC-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  }

  #logTransaction(type, amount) {
    this.#transactionHistory.push({
      type,
      amount,
      data: new Date(),
      balance: this.#balance,
    });
  }

  // Public methods
  getBalance() {
    return this.#balance;
  }

  getAccountNumber() {
    return this.#accountNumber;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
    this.#logTransaction("Deposit", amount);
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdraw amount must be positive");
    }
    this.#balance -= amount;
    this.#logTransaction("Withdraw", amount);
    return this.#balance;
  }

  getTransactionHistory() {
    return [...this.#transactionHistory];
  }
}

const account = new BankAccount("Alice", 1000);
console.log("Owner:", account.owner);
console.log("Account number:", account.getAccountNumber());
console.log("Balance:", account.getBalance());

// Private Fields are Enforced
/*
try {
  account.#balance = 999;
} catch (error) {
  console.log("Cannot access private field:", error.message);
}
*/

