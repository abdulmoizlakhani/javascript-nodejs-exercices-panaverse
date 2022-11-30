const guests = ["Jamaal", "Kamaal", "Nehaal"];

guests.forEach((guest, i) => {
  console.log(
    `Invite ${i + 1}: `,
    `Hi ${guest}, I hope you are doing well. I would like to invite you to the dinner tomorrow.`
  );
});
