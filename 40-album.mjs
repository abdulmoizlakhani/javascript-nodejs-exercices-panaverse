function make_album(artist, title, tracks) {
  let album = { artist, title };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}

console.log(make_album("The Dear Hunter", "Antimai"));
console.log(make_album("Fresh", "Raise Hell"));
console.log(make_album("Guided by Voices", "Tremblers and Goggles by Rank", 12));
