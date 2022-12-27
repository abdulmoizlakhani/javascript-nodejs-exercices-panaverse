// Make a array of your three favorite fruits and call it favorite_fruits.
const favorite_fruits = ["apple", "grapes", "pineapple"];

// Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.indexOf("grapes") !== -1) {
  console.log("You really like grapes!");
}

if (favorite_fruits.indexOf("apple") === -1) {
  console.log("Not Found!");
}

if (favorite_fruits[2] === "pineapple") {
  console.log("You really like grapes!");
}

if (favorite_fruits[1] !== "apple") {
  console.log("Not Found!");
}

if (favorite_fruits.includes("apple")) {
  console.log("You really like apple!");
}
