/*
 Name: Abdul Moiz Lakhani
 Date: 23-11-2022
 Description: The programs gets the user's name using prompt in the console and saves it in the personName variable.
              Then prints a message back in the console with user's name.
*/

import promptSync from "prompt-sync";

const prompt = promptSync();

const personName = prompt("Please enter your name: ");

console.log("Message: ", `Hi ${personName}, would you like to learn some Python today?`);