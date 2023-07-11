/**
 * Name: Imran Munir
 * Date: 11/07/2023
 * Description: This is the main file of the TypeScript Assignment 1
 */

// Question 2
let userMessage: String = "Hello Imran, Would you like to learn TypeScript?";

console.log(userMessage);

// Question 3
let myName: String = "Imran Munir";

console.log("Name in lower case: ", myName.toLowerCase());
console.log("Name in upper case: ", myName.toUpperCase());
console.log(
  "Name in title case: ",
  myName
    .split(" ")
    .map((name) => name[0].toUpperCase() + name.substring(1))
    .join(" ")
);

// Question 4
console.log(
  `Albert Einstein once said, “A person who never made a mistake never tried anything new.”`
);

// Question 5
const famousPerson: String = "Albert Einstein";
const message: String = `${famousPerson} once said, “A person who never made a mistake never tried anything new.”`;

console.log(message);

// Question 6
let personName: String = "      \tImran Munir      \n";

console.log(personName);
console.log(personName.trim());

// Question 7 & 8

console.log("Addition: ", 5 + 3);
console.log("Subtraction: ", 11 - 3);
console.log("Multiplication: ", 4 * 2);
console.log("Division: ", 16 / 2);

// Question 9
const favNumber: number = 2;

console.log("Favourite Number: ", favNumber);

// Question 10

/**
 * Name: Imran Munir
 * Date: 11/07/2023
 * Description: This is the main file of the TypeScript Assignment 1
 */
