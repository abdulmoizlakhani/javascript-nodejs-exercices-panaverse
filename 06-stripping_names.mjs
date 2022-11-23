const person_name = " \t\n   Abdul \n Moiz \t Lakhani  \t\t\n";
console.log("Person's Name before Stripped: ", person_name);
console.log("Person's Name after Stripped: ", person_name.trim().replace(/\s+/g, " "));