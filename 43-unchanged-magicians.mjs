const magicians = ["Chris", "David", "Peter"];
const magician_copy = [...magicians];
let new_magician = [];

function make_great(list) {
  list.forEach((name) => {
    new_magician.push(`Great ${name}`);
  });
}

function show_magicians(arr) {
  console.log(arr);
}

make_great(magician_copy);

show_magicians(magicians);
show_magicians(new_magician);
