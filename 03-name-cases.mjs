/*
 Name: Abdul Moiz Lakhani
 Date: 23-11-2022
 Description: The programs gets the user's name using prompt in the console and saves it in the personName variable.
              Then prints the name in lowercase, uppercase and title case in the console.
*/

import promptSync from "prompt-sync";

const prompt = promptSync();

const personName = prompt("Please enter your name: ");

console.log("Lowercase: ", personName.toLowerCase());
console.log("Uppercase: ", personName.toUpperCase());
console.log("Title Case: ", personName.split(" ").map(c => c.charAt(0).toUpperCase() + c.slice(1).toLowerCase()).join(" "));