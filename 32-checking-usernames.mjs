// Make a list of five or more usernames called current_users.
const current_users = ["tim", "admin", "kim", "tina", "jerry"];

// Make another list of five usernames called new_users.
// Make sure one or two of the new usernames are also in the current_users list.
const new_users = ["kim", "jerry", "Tim"];

// Loop through the new_users list to see if each new username has already been used.
// If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach((user) => {
  if (current_users.indexOf(user) !== -1) {
    console.log(
      `Hey! username '${user}' is already taken, please enter a new username`
    );
  } else {
    console.log(`username '${user}' is available`);
  }
});
