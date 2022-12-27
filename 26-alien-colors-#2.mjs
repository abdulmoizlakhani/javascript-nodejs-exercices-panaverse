let alien_color = "green";

// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color === "green") {
  console.log("Hurray! You earned 5 Points for shooting the alien!");
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else if (alien_color !== "green") {
  console.log("Hurray! You earned 10 Points!");
}

// Write one version of this program that runs the if block and another that runs the else block.
alien_color = "yellow";

if (alien_color === "yellow") {
  console.log("Be Careful!");
} else {
  console.log("You Lost!");
}
