import promptSync from "prompt-sync";

const prompt = promptSync();

let age = +prompt("Please enter age: ");

if (age < 1) {
  console.log("Age can't be zero or negative.");
}

// If the person is less than 2 years old, print a message that the person is a baby.
else if (age < 2) {
  console.log("It's a baby.");
}

// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
  console.log("It's a toddler.");
}

// If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
  console.log("It's a kid.");
}

// If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
  console.log("It's a teenager.");
}

// If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
  console.log("It's an adult.");
}

// If the person is age 65 or older, print a message that the person is an elder.
else {
  console.log("It's an elder.");
}
