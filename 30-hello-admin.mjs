const usernames = ["Tim", "admin", "Kim", "Tina", "Jerry"];

// If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

usernames.forEach((user) => {
  if (user === "admin") {
    console.log("Hello Admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${user}, thank you for logging in again.`);
  }
});
