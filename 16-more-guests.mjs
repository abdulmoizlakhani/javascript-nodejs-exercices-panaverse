const guests = ["Jamaal", "Kamaal", "Nehaal"];

function sendInvite() {
  guests.forEach((guest, i) => {
    console.log(
      `Invite ${i + 1}: `,
      `Hi ${guest}, I hope you are doing well. I would like to invite you to the dinner tomorrow.`
    );
  });
}

console.log("Hey Friends! We have a bigger table and 3 more guests are joining us!");

guests.unshift("Bilal");
const middleIndexOfArray = Math.ceil(guests.length / 2);
guests.splice(middleIndexOfArray, 0, "Faheem")

guests.push("Shabbir");

sendInvite();
