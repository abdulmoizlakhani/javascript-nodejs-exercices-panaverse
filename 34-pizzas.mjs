// Think of at least three kinds of your favorite pizza.
// Store these pizza names in a array, and then use a for loop to print the name of each pizza.
const pizzas = ["Chicken Fajita Pizza", "Macaroni Pizza", "Mutton Malai Pizza"];

for (let index = 0; index < pizzas.length; index++) {
  const pizza = pizzas[index];
  console.log("Pizza: ", pizza);
}

// Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// Add a line at the end of your program, outside the for loop, that states how much you like pizza.
// The output should consist of three or more lines about the kinds of pizza you like and
// then an additional sentence, such as I really love pizza!

for (let index = 0; index < pizzas.length; index++) {
  const pizza = pizzas[index];
  console.log("I like ", pizza);
}
console.log(`
    Pizza is one of my favorite fast food item. \n
    Most of the times, I try cheese pizza but it was not available today, so I ate Chicken Fajita. \n
    It was really delicious!
`);
