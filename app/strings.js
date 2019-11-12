// Write a function that returns the character from a string at a given position
function letterAtPosition(str, position) {
  return str[position];
}

// Write a function that will join two strings with an optional seperating character 
function concat(str1, str2, seperator = " ") {
  let first = str1.split();
  let second = str2.split();
  return first.concat(second).join(seperator);
}

// Write a function that will capitalize the letter at a given position and return it
function capitalizer(str, position) {
  return str[position].toUpperCase();
}