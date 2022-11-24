function createLines(num) {
  const line = "===========================";
  let text = "";

  for (let index = 0; index < num; index++) {
    text += line + "\n\n8\n\n";

    if (index === num - 1) {
      text += line;
    }
  }

  return text;
}

console.log(createLines(3));
