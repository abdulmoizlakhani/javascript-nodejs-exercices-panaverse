import promptSync from "prompt-sync";

const prompt = promptSync();

let fruits = [];

const fruitList = prompt("Please enter fruit names(comma ',' separated): ");

fruits.push(...fruitList.split(","));

console.log(`Fruits: `, fruits);
