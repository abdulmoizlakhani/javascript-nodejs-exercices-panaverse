const guests = ["Jamaal", "Kamaal", "Nehaal"];

guests.unshift("Bilal");
const middleIndexOfArray = Math.ceil(guests.length / 2);
guests.splice(middleIndexOfArray, 0, "Faheem");

guests.push("Shabbir");

console.log(`I have invited ${guests.length} guests!`);
