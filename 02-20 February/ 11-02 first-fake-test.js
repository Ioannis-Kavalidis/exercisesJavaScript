// first-fake-test

//  * Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
console.log("1st  exercise");

const object = {
  name: "John",
  country: "Hellas",
  age: 38
};

const newObject = [];
const keys = Object.keys(object);
const values = Object.values(object);
newObject.push(keys, values);
console.log(newObject);

// * Where's Waldo? Create a function that takes a string and returns true if Waldo is found, and false if he's not.

// Examples:

// isWaldoHere("is there wal here ?") ➞ false
// isWaldoHere("I found you Waldo!") ➞ true
// isWaldoHere("is wally here?") ➞ false
// isWaldoHere("waldo is here") ➞ true
console.log("2nd  exercise");

function isWaldoHere(string) {
  let newString = string.toLowerCase();
  if (newString.includes("waldo")) {
    return true;
  } else {
    return false;
  }
}

console.log(isWaldoHere("is there wal here ?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("is wally here?"));
console.log(isWaldoHere("waldo is here"));

// * isPrime? Create a function that returns true if a number is prime and false if it's not. NB:
// a prime number is any positive integer greater than 1, which is only evenly divisible by two divisors: itself and 1.
// The first ten prime numbers are 2, 3, 5, 7, 11, 13, 17, 19, 23 and 29.

// Examples:

// isPrime(7) ➞ true
// isPrime(9) ➞ false
// isPrime(10) ➞ false
console.log("3rd  exercise");

function isNumberPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
}

console.log(isNumberPrime(1));
console.log(isNumberPrime(9));
console.log(isNumberPrime(12));
console.log(isNumberPrime(23));

// * For the longest word. Create a function to find the longest word in a given string.

// i.e. longestWord("this is a web development course") ➞ "development"
console.log("4rth exercise");

function theLongestWord(string) {
  let str = string.split(" ");
  let longest = 0;
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (longest < str[i].length) {
      longest = str[i].length;
      word = str[i];
    }
  }
  return word;
}
console.log(theLongestWord("this is a web development developmentssss"));
