function order_sandwich() {
  const ingredients = Array.from(arguments).join(", ");
  const order_message = "Please prepare a Sandwich with " + ingredients + ".";
  console.log(order_message);
}

order_sandwich("Peperoni");
order_sandwich("Peperoni", "Salad");
order_sandwich("Peperoni", "Salad", "Sauce");
