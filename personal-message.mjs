import promptSync from "prompt-sync";

const prompt = promptSync();

const personName = prompt("Please enter your name: ");

console.log("Message: ", `Hi ${personName}, would you like to learn some Python today?`);