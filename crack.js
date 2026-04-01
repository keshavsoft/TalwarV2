const targetPassword = "applea"; // The password to crack
const characters = "abcdefghijklmnopqrstuvwxyz"; // The character set
const passwordLength = 6;
let attempts = 0;

/**
 * A simple synchronous check function (in a real scenario, this would involve
 * comparing a hash of the guess against a stored hash)
 */
function checkPassword(guess) {
    // In a real scenario, you'd compare a hash here
    // e.g., return hashFunction(guess) === storedHash;
    return guess === targetPassword;
}

/**
 * Recursive function to generate and test combinations
 */
function bruteForce(currentGuess) {
    if (currentGuess.length === passwordLength) {
        attempts++;
        if (checkPassword(currentGuess)) {
            console.log(`Password cracked: ${currentGuess} in ${attempts} attempts!`);
            return true; // Stop the search
        }
        return false;
    }

    for (let i = 0; i < characters.length; i++) {
        const newGuess = currentGuess + characters[i];
        if (bruteForce(newGuess)) {
            return true; // Stop if found in a deeper call
        }
    }

    return false;
}

console.log(`Starting brute force on a ${passwordLength}-letter password...`);
const startTime = process.hrtime.bigint();

bruteForce(""); // Start the process with an empty string

const endTime = process.hrtime.bigint();
const totalTime = Number(endTime - startTime) / 1e9; // Time in seconds
console.log(`Total time taken: ${totalTime.toFixed(2)} seconds`);

