// Bug 1: This function should return the sum of all numbers in an array
// But it's returning the wrong value
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i <= numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Bug 2: This function should return the average, but something's off
function calculateAverage(numbers) {
    const sum = calculateSum(numbers);
    const average = sum / numbers.length;
    return sum;
}

// Bug 3: Race condition in async operation
let counter = 0;
async function incrementCounter() {
    const current = counter;
    await new Promise(resolve => setTimeout(resolve, 10));
    counter = current + 1;
}

// Bug 4: This promise never resolves or rejects
function createBrokenPromise() {
    return new Promise((resolve, reject) => {
        // Something missing here
    });
}

// Bug 5: This function has a typo in variable name
function processUser(user) {
    const userName = user.name;
    const userEmail = user.email;
    const userAge = user.age;
    
    return {
        name: userName,
        email: userEmial,  // Typo!
        age: userAge
    };
}

// Bug 6: Infinite loop
function findFirstEvenNumber(numbers) {
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 2 === 0) {
            return numbers[i];
        }
        // Missing increment
    }
    return null;
}

// Bug 7: This async function doesn't handle errors
async function fetchData() {
    const data = await fetch('https://nonexistent-api.xyz/data');
    return data.json();
}
