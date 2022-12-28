const magicians = ["Chris", "David", "Peter"];

function show_magicians(names) {
  names.forEach((name, i) => {
    console.log(`${i + 1}: ${name}`);
  });
}

show_magicians(magicians);
