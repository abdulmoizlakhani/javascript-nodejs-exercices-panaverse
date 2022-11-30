const guests = ["Jamaal", "Kamaal", "Nehaal"];

function sendInvite() {
  guests.forEach((guest, i) => {
    console.log(
      `Invite ${i + 1}: `,
      `Hi ${guest}, I hope you are doing well. I would like to invite you to the dinner tomorrow.`
    );
  });
}

sendInvite();

console.log(
  `\n ${guests[1]} will not be able to join in dinner. Inviting Naeem. \n`
);

guests.splice(1, 1, "Naeem");

sendInvite();
