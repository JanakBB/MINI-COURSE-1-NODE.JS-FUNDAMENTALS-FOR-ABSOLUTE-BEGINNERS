// Private fields (new in ES2022)
export class User {
  #password; // Private field (cannot be accessed outside)
  #loginAttempts = 0;

  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.#password = password;
  }

  // Public method
  authenticate(inputPassword) {
    this.#loginAttempts++;
    const isValid = this.#password === inputPassword;
    if (isValid) {
      this.#loginAttempts = 0;
    }
    return isValid;
  }

  getLoginAttempts() {
    return this.#loginAttempts;
  }

  // Private method (using # prefix)
  #hashPassword() {
    // Simulate password hashing
    return `hashed_${this.#password}`;
  }

  getSecureInfo() {
    return {
      username: this.username,
      email: this.email,
      passwordHash: this.#hashPassword(),
    };
  }
}

// Named export for helper function
export function validateEmail(email) {
  return email.includes("@") && email.includes(".");
}
