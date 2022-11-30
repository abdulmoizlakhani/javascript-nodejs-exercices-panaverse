const friends = ["Ali", "Yasir", "Nasir", "Qadir"];

friends.forEach((friend, i) => {
  console.log(
    `Message ${i + 1}: `,
    `Hi ${friend}, would you like to learn some Python today?`
  );
});
