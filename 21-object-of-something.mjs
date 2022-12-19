import promptSync from "prompt-sync";

const prompt = promptSync();

let fruits = {};

const fruitList = prompt("Please enter fruit names(comma ',' separated): ");
const list = fruitList.split(",");

for (let index = 0; index < list.length; index++) {
    fruits[`fruit-${index+1}`] = list[index]
}

console.log(`Fruits Object: `, fruits);
