/*
    CIT 281 Project 1
    Name: Lucas Van Dermark
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Moved to inside for loop
//let oneLetter = alphabet[getRandomInteger(0,alphabet.length)];


const numberOfLetters = getRandomInteger(5,26);

let allLetters = "";

for (let i=0; i < numberOfLetters; i++) {
    let oneLetter = alphabet[getRandomInteger(0,alphabet.length)];
    allLetters += oneLetter;
}

console.log(allLetters);