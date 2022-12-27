// Tests for equality and inequality with strings
console.log("JAMStack" === "JAMStack");
console.log("JAMStack" !== "jamstack");

// Tests using the lower case function
console.log("JAMStack".toLowerCase() !== "jamStAck".toLowerCase());

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(18 === 18);
console.log(15 !== "15");
console.log(20 > 11);
console.log(1 < 2);
console.log(37 >= 25);
console.log(22 <= 7);

// Tests using "and" and "or" operators
const fruit = "apple";
const health = "good";

console.log(fruit === "apple" || fruit === "grapes");
console.log(fruit === "apple" && health === "good");

// Test whether an item is in a array
const arr = [1, 3, 5, 7, 9];
console.log(arr.indexOf(5) !== -1);

// Test whether an item is not in a array
const arr2 = [1, 3, 5, 7, 9];
console.log(arr2.indexOf(4) === -1);