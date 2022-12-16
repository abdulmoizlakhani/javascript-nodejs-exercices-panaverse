const places = ["Malaysia", "Germany", "USA", "Italy", "Russia"];

console.log("Places to visit: ", places);

const places_sorted = [...places].sort();
console.log("Original List After Sort: ", places);

const places_reverse_sorted = [...places].sort().reverse();
console.log("Original List After Reverse Sort: ", places);

console.log("Reverse Original List: ", places.reverse());
console.log("Reverse Original List Again: ", places.reverse());

console.log("Alphabetical Sorted List: ", places_sorted);
console.log("Reverse Alphabetical Sorted List: ", places_reverse_sorted);
