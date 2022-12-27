import promptSync from "prompt-sync";

const prompt = promptSync();

let alien_color = prompt("Please enter color name: ");

// If the alien is green, print a message that the player earned 5 points.
if (alien_color === "green") {
  console.log("Hurray! You earned 5 Points.");
}
// If the alien is yellow, print a message that the player earned 10 points.
else if (alien_color === "yellow") {
  console.log("Hurray! You earned 10 Points!");
}
// If the alien is red, print a message that the player earned 15 points.
else if (alien_color === "red") {
  console.log("Hurray! You earned 15 Points!");
}
