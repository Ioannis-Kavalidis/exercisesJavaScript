// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".

const string = word => {
  if (word == "JavaScript") {
    return "I know it's crazy 😉";
  } else {
    return "It's so dull";
  }
};
console.log(string("JavaScript"));

// Create a function that calculates the user age e.g. 2000 -> 20.
const currentTime = new Date().getFullYear();
const age = num => {
  let result = 0;
  if (typeof num == "number") {
    result = currentTime - num;
    return `You are ${result} years old`;
  } else {
    return `Not a valid date`;
  }
};

console.log(age(1982));

// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.

// function monthName(text) {
//   let array = [];
//   let smallLetterText = text.toLowerCase();
//   let months = [
//     January,
//     February,
//     March,
//     April,
//     May,
//     June,
//     July,
//     August,
//     September,
//     October,
//     November,
//     December
//   ];
//   array.push(months[i]);
//   let smallLetterMonths = months.toLowerCase();
//   let winter = [winter, spring, summer, autumn];

//   if (smallLetterText == smallLetterMonths) {
//     return `${text} is a month in the winter season`;
//   } else {
//   }
// }
// console.log(monthName("June"));

// let month = "July";
// switch (month) {
//   case "January":
//     console.log("January is a month in the winter season");
//     break;
//   case "February":
//     console.log("February is a month in the winter season");
//     break;
//   case "March":
//     console.log("March is a month in the spring season");
//     break;
//   case "April":
//     console.log("April is a month in the spring season");
//     break;
//   case "May":
//     console.log("May is a month in the spring season");
//     break;
//   case "June":
//     console.log("June is a month in the summer season");
//     break;
//   case "July":
//     console.log("July is a month in the summer season");
//     break;
//   case "August":
//     console.log("August is a month in the summer season");
//     break;
//   case "September":
//     console.log("September is a month in the autumn season");
//     break;
//   case "October":
//     console.log("October is a month in the autumn season");
//     break;
//   case "November":
//     console.log("November is a month in the autumn season");
//     break;
//   case "December":
//     console.log("December is a month in the winter season");
//     break;
//   default:
//     console.log("Not a month");
// }

// Create a function that takes a string and a word, and then returns true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

const word = (param1, param2) => {
  if (param2.startsWith(param1)) {
    return true;
  } else {
    return false;
  }
};
console.log(word("bu", "button"));

// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed
function twoForMe(name) {
  if (typeof name === "undefined") {
    return `Two for me and one for you`;
  } else {
    return `Two for me and one for ${name}`;
  }
}

console.log(twoForMe("Ali")); // -> "Two for me and one for Ali"
console.log(twoForMe()); // -> "Two for me and one for you"

// const twoForMe = () => {
//   if (() == undefined) {
//     return `Two for me and one for you`;
//   } else {
//     return `Two for me and one for ${}`;
//   }
// };

// Complete the function below so that it still calculates the power of a number even if the `exp` argument is not passed to it. The default `exp` should be set to 2.
// Example: Calling the function with 2 and 4 will return 16 (2 to the power of 4), If you call it with just 2, it should return 4 (2 to the power of 2).

function power(base, exponent) {
  let result = 1;
  if (exponent == undefined) {
    exponent = 2;
  }
  for (let i = 1; i <= exponent; i++) {
    result = result * base;
  }
  return result;
}

console.log(power(2, 5)); // -> 32
console.log(power(4)); // -> 16

// Create a function will calculate a student degrees for 6 subjects,
//if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

function studentDegrees(...agrs) {
  for (let i = 0; i < agrs.length; i++) {
    if (agrs < 70) {
      return "F";
    } else if (agrs > 70 && agrs < 80) {
      return "C";
    } else if (agrs > 80 && agrs < 85) {
      return "B";
    } else if (agrs > 85 && agrs < 90) {
      return "A";
    } else if (agrs > 90) {
      return "A+";
    } else {
      return "Not present, no grade given";
    }
  }
}

console.log(studentDegrees(86));

// Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences(“this is a string”, “i”) ➞ 3

function countOccurrences(string, letter) {
  let letterOccurrences = string.split(letter).length - 1;
  return letterOccurrences;
}
console.log(countOccurrences("this is a string", "i"));

// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy’s age in human years.
//Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”

function dogAge(num) {
  if (num !== NaN) {
    dogYears = num * 7;
    return `Your doggo is ${dogYears} years old in dog years!`;
  } else {
    return `This is not a valid number`;
  }
}
console.log(dogAge(4));

// A Lifetime Supply... Create a function to calculate how much you’ll actually be geStting for a lifetime supply of your favourite snack.
// The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
// Bonus Accept floating point values for amount per day and round the result.
// i.e. calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”

function supplyOfSnack(age, amount) {
  maxAge = 80;
  let result = (maxAge - age) * amount * 365;
  return Math.round(result);
}

console.log(supplyOfSnack(25, 1.5));

// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "yu are cool".

function greeting(name, age, address, ...activities) {
  let greet = name + age + address + activities;
  if (activities == "dance" || activities == "party") {
    return `My name is ${name}, I am ${age} and I live in ${address} and my hobbies are dance and party. - Hey man, you are cool`;
  } else {
    return `My name is ${name}, I am ${age} and I live in ${address} and my hobbies are ${activities}`;
  }
}

console.log(greeting("Ioannis", "37", "Berlin", "softball", "handball"));

// Pie. Create a function that determines whether or not it’s possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.
// Examples:
// equalSlices(11, 5, 3) ➞ false // 5 people x 3 slices each = 15 slices > 11 slices
// equalSlices(8, 3, 2) ➞ true
// equalSlices(8, 3, 3) ➞ false
// equalSlices(24, 12, 2) ➞ true
// ----------------

function equalSlices(slices, recipients, slicesEach) {
  if (recipients * slicesEach > slices) {
    return false;
  } else {
    return true;
  }
}
console.log(equalSlices(11, 5, 3));
console.log(equalSlices(8, 3, 2));
console.log(equalSlices(8, 3, 3));
console.log(equalSlices(24, 12, 2));

// XO Create a function that takes a string, checks if it has the same number of ’x’s and ’o’s and returns either true or false.
// Notes:
// Return a boolean value (true or false).
// The string can contain any character.
// When neither an x nor an o is in the string, return true.
// Examples:
// XO(“ooxx”) ➞ true
// XO(“xooxx”) ➞ false
// XO(“ooxXm”) ➞ true (case insensitive)
// XO(“zpzpzpp”) ➞ true (returns true if no x and o)
// XO(“zzoo”) ➞ false
// ----------------
// console.log("My Tema");

function checkIf(word) {
  let array = [];
  let smallLetters = word.toLowerCase();
  let os = smallLetters.split("o").length - 1;
  let xs = smallLetters.split("x").length - 1;
  if (os == xs) {
    return true;
  } else {
    return false;
  }
}

console.log(checkIf("ooxx"));
console.log(checkIf("xooxx"));
console.log(checkIf("ooxXm"));
console.log(checkIf("zpzpzpp"));
console.log(checkIf("zzoo"));

// function checkIf(str) {
//     if (str.includes(x) && str.includes(o)) {

//         return true;
//     }else if(){

//         return true;
//     } else {
// return false;
//     }
// }

// console.log(checkIf("ooxx"));

// Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

function email(address) {
  let thirdToLast = address.substring(address.length - 4);
  let secondToLast = address.substring(address.length - 3);

  if (
    address.includes("@") &&
    address.includes(".") &&
    "@" != address[0] &&
    "." != address[0] &&
    (thirdToLast || secondToLast == ".")
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(email("johnsmith@email.com"));
