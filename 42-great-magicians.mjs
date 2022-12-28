const magicians = ["Chris", "David", "Peter"];

function make_great(name) {
  return `Great ${name}.`;
}

function show_magicians(names) {
  names.forEach((name) => {
    console.log(make_great(name));
  });
}

show_magicians(magicians);
