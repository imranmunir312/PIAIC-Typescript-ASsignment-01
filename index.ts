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

interface Person {
  name: string;
  age: number;
  country: string;
}

const person: Person = {
  name: "Imran Munir",
  age: 23,
  country: "Pakistan",
};

// Question 22
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers[numbers.length]

numbers[numbers.length - 1];

// Question 23
let car: string = "bugati";

console.log("Is car == 'bugati'? I predict True.");
console.log(car == "bugati");

console.log("Is car == 'subaru'? I predict False.");
console.log(car == "subaru");

console.log("Is car === 'bugati'? I predict True.");
console.log(car === "bugati");

console.log("Is car === 'subaru'? I predict False.");
console.log(car === "subaru");

console.log("Is car != 'bugati'? I predict False.");
console.log(car != "bugati");

console.log("Is car != 'subaru'? I predict True.");
console.log(car != "subaru");

console.log("Is car !== 'bugati'? I predict False.");
console.log(car !== "bugati");

console.log("Is car !== 'subaru'? I predict True.");
console.log(car !== "subaru");

console.log("Is car > 'bugati'? I predict False.");
console.log(car > "bugati");

console.log("Is car > 'subaru'? I predict False.");
console.log(car > "subaru");

// Question 24
console.log("Is myName !== 'Noman'? I predict True.");
console.log(myName !== "Noman");

console.log("Is myName === 'Noman'? I predict False.");
console.log(myName === "Noman");

console.log("Test using lowercase");

console.log("Is Name.toLowerCase() === 'noman'? I predict False.");
console.log(myName.toLowerCase() === "noman");

console.log("Is Name.toLowerCase() === 'imran'? I predict True.");
console.log(myName.toLowerCase() === "imran");

console.log(
  "Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to"
);

const conditionalTestNum: number = 5;

console.log("is conditionalTestNum == 5 ? I predict True.");
console.log(conditionalTestNum === 5);

console.log("is conditionalTestNum == 6 ? I predict False.");
console.log(conditionalTestNum === 6);

console.log("is conditionalTestNum != 5 ? I predict False.");
console.log(conditionalTestNum !== 5);

console.log("is conditionalTestNum != 6 ? I predict True.");
console.log(conditionalTestNum !== 6);

console.log("is conditionalTestNum > 5 ? I predict False.");
console.log(conditionalTestNum > 5);

console.log("is conditionalTestNum > 4 ? I predict True.");
console.log(conditionalTestNum > 4);

console.log("is conditionalTestNum < 5 ? I predict False.");
console.log(conditionalTestNum < 5);

console.log("is conditionalTestNum < 6 ? I predict True.");
console.log(conditionalTestNum < 6);

console.log("is conditionalTestNum >= 5 ? I predict True.");
console.log(conditionalTestNum >= 5);

console.log("is conditionalTestNum >= 6 ? I predict False.");
console.log(conditionalTestNum >= 6);

console.log("is conditionalTestNum <= 5 ? I predict True.");
console.log(conditionalTestNum <= 5);

console.log("is conditionalTestNum <= 4 ? I predict False.");
console.log(conditionalTestNum <= 4);

console.log("Tests using 'and' and 'or' operators");

console.log(
  "is conditionalTestNum == 5 && conditionalTestNum == 5 ? I predict True."
);
console.log(conditionalTestNum == 5 && conditionalTestNum == 5);

console.log(
  "is conditionalTestNum == 5 && conditionalTestNum == 6 ? I predict False."
);
console.log(conditionalTestNum == 5 && conditionalTestNum >= 6);

console.log(
  "is conditionalTestNum == 5 || conditionalTestNum == 6 ? I predict True."
);

console.log(conditionalTestNum == 5 || conditionalTestNum == 6);

console.log(
  "is conditionalTestNum == 6 || conditionalTestNum > 6 ? I predict False."
);
console.log(conditionalTestNum == 6 || conditionalTestNum > 6);

console.log("Test whether an item is in a array");

const testArray: number[] = [1, 2, 3, 4, 5];

console.log("is 5 in testArray ? I predict True.");
console.log(testArray.includes(5));

console.log("Test whether an item is not in a array");

console.log("is 6 in testArray ? I predict False.");
console.log(testArray.includes(6));

// Question 25
let alien_color: string = "green";

if (alien_color === "green") {
  console.log("You just earned 5 points");
}

if (alien_color !== "green") {
}

// Question 26

if (alien_color === "green") {
  console.log("You just earned 5 points");
} else {
  console.log("You just earned 10 points");
}

alien_color = "red";

if (alien_color === "green") {
  console.log("You just earned 5 points");
} else {
  console.log("You just earned 10 points");
}

// Question 27

alien_color = "green";

if (alien_color === "green") {
  console.log("You just earned 5 points");
} else if (alien_color === "yellow") {
  console.log("You just earned 10 points");
} else if (alien_color === "red") {
  console.log("You just earned 15 points");
}

alien_color = "yellow";

if (alien_color === "green") {
  console.log("You just earned 5 points");
} else if (alien_color === "yellow") {
  console.log("You just earned 10 points");
} else if (alien_color === "red") {
  console.log("You just earned 15 points");
}

alien_color = "red";

if (alien_color === "green") {
  console.log("You just earned 5 points");
} else if (alien_color === "yellow") {
  console.log("You just earned 10 points");
} else if (alien_color === "red") {
  console.log("You just earned 15 points");
}

// Question 28

let age: number = 23;

if (age < 2) {
  console.log("You are a baby");
} else if (age >= 2 && age < 4) {
  console.log("You are a toddler");
} else if (age >= 4 && age < 13) {
  console.log("You are a kid");
} else if (age >= 13 && age < 20) {
  console.log("You are a teenager");
} else if (age >= 20 && age < 65) {
  console.log("You are an adult");
} else if (age >= 65) {
  console.log("You are an elder");
}

// Question 29

const favouriteFruit: string[] = ["apple", "banana", "peaches"];

if (favouriteFruit.includes("apple")) {
  console.log("You really like apples");
}

if (favouriteFruit.includes("banana")) {
  console.log("You really like bananas");
}

if (favouriteFruit.includes("orange")) {
  console.log("You really like oranges");
}

if (favouriteFruit.includes("peaches")) {
  console.log("You really like peaches");
}

if (favouriteFruit.includes("grapes")) {
  console.log("You really like grapes");
}

// Question 30

const usernames: string[] = ["admin", "noman", "aashir", "aizaz", "izhar"];

usernames.forEach((username: string) => {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username},  thank you for logging in again`);
  }
});

// Question 31

usernames.length = 0;

if (usernames.length === 0) {
  console.log("We need to find some users!");
}

// Question 32
const currentUsers: string[] = ["admin", "noman", "aashir", "aizaz", "izhar"];
const newUsers: string[] = ["ahsan", "imran", "sanoodia", "aizaz", "izhar"];

newUsers.forEach((newUser: string) => {
  if (
    currentUsers.find(
      (user: string) => user.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} is already taken, please enter a new username`);
  } else {
    console.log(`${newUser} is available`);
  }
});

// Question 33

const ordinalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

ordinalNumbers.forEach((ordinalNumber: number) => {
  if (ordinalNumber === 1) {
    console.log(`${ordinalNumber}st`);
  } else if (ordinalNumber === 2) {
    console.log(`${ordinalNumber}nd`);
  } else if (ordinalNumber === 3) {
    console.log(`${ordinalNumber}rd`);
  } else {
    console.log(`${ordinalNumber}th`);
  }
});

// Question 34

const pizzas: string[] = ["pepperoni", "chicken", "beef", "cheese"];

pizzas.forEach((pizza: string) => {
  console.log(`I like ${pizza} pizza`);
});

console.log("I like cheese pizza very much");
console.log("I really love pizza");

// Question 35
const animals: string[] = ["cat", "dog", "lion"];

animals.forEach((animal: string) => {
  console.log(`A ${animal} would make a great pet`);
});

console.log("Any of these animals would make a great pet");

// Question 36
