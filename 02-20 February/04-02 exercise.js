// console.log(character("tree"));

function getOccurrences(name) {
  // my way of sort
  return name.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

console.log(getOccurrences("treeaas!."));

let str = "Mauricio"; // Mauricio's way
const lett = str => {
  let arr = str.split("");
  let counter = {};
  arr.filter(index => {
    counter[index] = (counter[index] || 0) + 1;
  });
  return counter;
};
console.log(lett(str));

function countLetters(str) {
  // the right way from Hadi with function and object
  let arr = str.split("");
  let result = {};
  function countOccurrences(str, letter) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        counter++;
      }
    }
    return counter;
  }
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i]; // A then B then C ...
    result[currentChar] = countOccurrences(str, currentChar); // inner function using bracket notation, very important to understand SOS
  }
  return result;
}

console.log(countLetters("ABC"));

// countLetters(“tree”) -> expected output: t: 1, r: 1, e: 2

function countLetters1(str1) {
  let arr1 = str1.split("");
  let result = {};
  function countOccurrences1(str1, letter) {
    let letterOccurrences = str1.split(letter).length - 1;
    return letterOccurrences;
  }
  for (let i = 0; i < arr1.length; i++) {
    let currentChar1 = arr1[i];
    result[currentChar1] = countOccurrences1(str1, currentChar1);
  }

  return result;
}
console.log(countLetters1("BAM!!!!"));
