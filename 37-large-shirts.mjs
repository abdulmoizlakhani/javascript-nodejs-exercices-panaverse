function make_shirt(size = "large", message = "I love JavaScript") {
  if (size === "large" || size === "medium") {
    message = "I love JavaScript";
    console.log(
      `I need ${size} size shirt with a message '${message}' printed on it.`
    );
  } else {
    console.log(
      `I need ${size} size shirt with a message '${message}' printed on it.`
    );
  }
}

make_shirt("small", "<Coding />");
make_shirt("medium", "<Coding />");
make_shirt("large", "<Coding />");
