const animals = ["cat", "dog", "wolf"];

for (let i = 0; i < animals.length; i++) {
  if (animals[i] === "dog" || animals[i] === "cat") {
    console.log(`${i + 1}. A ${animals[i]} would make a great pet.`);
  } else {
    console.log(`${i + 1}. A ${animals[i]} is dangerous animal.`);
  }
}

console.log(
  "These animals share some common characteristics such as 4 legs and a tail."
);
