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

// Question 11
const names: String[] = ["Imran", "Haris", "Noman", "Aashir", "Aizaz"];

names.forEach((friendName: String, index: number) =>
  console.log(`${index + 1}. ${friendName}`)
);

// Question 12
names.forEach((friendName: String) =>
  console.log(`${friendName}, How are you?`)
);

// Question 13
const favTransportation: String[] = ["Car", "Bike", "Train"];

favTransportation.forEach((transportation: String) =>
  console.log(`I would like to own a ${transportation} `)
);

// Question 14
const guests: string[] = ["Imran", "Noman", "Aashir", "Aizaz"];

guests.forEach((guest: String) =>
  console.log(`Hi ${guest}, I would like to invite you to my dinner party`)
);

// Question 15
console.log("Sorry, Aashir can't make it to dinner");

// Replace Aashir with Izhar
guests.splice(3, 1, "Izhar");

guests.forEach((guest: String) =>
  console.log(`Hi ${guest}, I would like to invite you to my dinner party`)
);

// Question 16
console.log("Naveed, Rohan and Sameed are still to be invited");

guests.unshift("Naveed");
guests.splice(3, 0, "Rohan");
guests.push("Sameed");

guests.forEach((guest: String) =>
  console.log(`Hi ${guest}, I would like to invite you to my dinner party`)
);

// Question 17
console.log("I can only invite two people to my dinner party");

while (guests.length > 2) {
  console.log(`Sorry ${guests.pop()}, I can't invite you to dinner`);
}

guests.forEach((guest: String) =>
  console.log(
    `Hi ${guest}, I would still like to invite you to my dinner party`
  )
);

guests.pop();
guests.pop();

console.log(guests);

// Question 18

let places: string[] = [
  "Time Square, New York",
  "Central Park, New York",
  "Toronto",
  "Madina",
  "Taj Mehal, Agra",
];

console.log("Original Order: ", places);

console.log("Alphabetical Order:", places.slice().sort());

console.log("Original Order: ", places);

console.log(
  "Reverse Alphabetical Order:",
  places.slice().sort((a, b) => b.localeCompare(a))
);

console.log("Original Order: ", places);

places = places.reverse();

console.log("Reverse Order: ", places);

places = places.reverse();

console.log("Reverse Order Again list back to original: ", places);

places = places.sort();

console.log("Alphabetical Order Original List: ", places);

places.sort((a, b) => b.localeCompare(a));

console.log("Reverse Alphabetical Order Original List: ", places);

// Question 19

console.log(`${guests.length} guests are invited to my dinner party`);

// Question 20

const rivers: string[] = ["indus", "nile", "amazon", "yangtze", "jhelum"];

// Question 21
