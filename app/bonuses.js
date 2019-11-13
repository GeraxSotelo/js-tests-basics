//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2"

function camelCase(str) {
  let strArr = str.split(" ");
  let camelCaseWord = strArr[0];

  for (let i = 1; i < strArr.length; i++) {
    let wordArr = strArr[i].split("");
    wordArr[0] = wordArr[0].toUpperCase();
    camelCaseWord += wordArr.join('');
  }
  return camelCaseWord;
}
