import promptSync from "prompt-sync";

const prompt = promptSync();

const personName = prompt("Please enter your name: ");

console.log("Lowercase: ", personName.toLowerCase());
console.log("Uppercase: ", personName.toUpperCase());
console.log("Title Case: ", personName.split(" ").map(c => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()).join(" "));