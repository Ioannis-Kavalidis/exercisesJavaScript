// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".

function checkStr(string) {
  //let strToArray = string.split(" ");
  if (string.includes("JavaScript")) {
    console.log("I know it's crazy 😉");
  }
}
checkStr("Hi my name is HADI");
checkStr("I like JavaScript");

// Create a function that calculates the user age e.g. 2000 -> 20.
const currentTime = new Date().getFullYear();
const age = num => {
  let result = 0;
  if (num < currentTime && num > 1900) {
    result = currentTime - num;
    return `You are ${result} years old`;
  } else {
    return `Not a valid date`;
  }
};

console.log(age(2021));

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
console.log(word("hicc", "hiccough"));
console.log(word("spices", "German food uses spices"));
console.log(word("hello", "Hello, World"));

// Complete the function below so that it returns "Two for me and one for you" when no arguments are passed

const twoForMe = (who = "you") => {
  return `Two for me and one for ${who}`;
};

// const twoForMe = name => {
//   if (typeof name === "undefined") {
//     return `Two for me and one for you`;
//   } else {
//     return `Two for me and one for ${name}`;
//   }
// };

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

const power = (base, exponent = 2) => {
  let result = 1;
  // if (exponent == undefined) {
  //   exponent = 2;
  // }
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
};

console.log(power(2, 53)); // -> 32
console.log(power(4)); // -> 16

// Create a function will calculate a student degrees for 6 subjects,
//if the average was less than 70 will print (F)
// Over 70 and less than 80 (C)
// Over than 80 and less than 85 (B)
// Over than 85 and less than 90 (A)
// And over 90 print (A+)

// const studentDe = (...args) => {
//   let result = "";
//   let sum = 0;
//   let avg = 0;
//   // for (let i=0; i<args.length;i++){
//   //   sum += args[i];
//   // }
//   sum = args.reduce((acc, cur) => (acc + cur) / args.length);
//   avg = Math.floor(sum / args.length);
//   if (avg > 90) {
//     result = `${avg} percent is an A+`;
//   } else if (avg >= 85 && avg <= 90) {
//     result = `${avg} percent is an A`;
//   } else if (avg >= 80 && avg <= 84) {
//     result = `${avg} percent is a B`;
//   } else if (avg >= 70 && avg <= 79) {
//     result = `${avg} percent is a C`;
//   } else if (avg < 70) {
//     result = `${avg} percent is an F`;
//   } else {
//     result = `Sorry something went wrong`;
//   }
//   return result;
// };
// console.log(studentDe(5, 6, 7, 8, 9));

function average(...args) {
  let notesResult = Math.floor(
    args.reduce((acc, cur) => acc + cur) / args.length
  );
  let result = "";
  if (notesResult > 90) {
    result = `${notesResult} percent is an A+`;
  } else if (notesResult >= 85 && notesResult <= 90) {
    result = `${notesResult} percent is an A`;
  } else if (notesResult >= 80 && notesResult <= 84) {
    result = `${notesResult} percent is a B`;
  } else if (notesResult >= 70 && notesResult <= 79) {
    result = `${notesResult} percent is a C`;
  } else if (notesResult < 70) {
    result = `${notesResult} percent is an F`;
  } else {
    result = `Sorry something went wrong`;
  }
  return result;
}
console.log(average(99, 44, 44, 80, 80, 98, 89));

// const studentDegrees = (...agrs) => {
//   for (let i = 0; i < agrs.length; i++) {
//     if (agrs < 70) {
//       return "F";
//     } else if (agrs > 70 && agrs < 80) {
//       return "C";
//     } else if (agrs >= 80 && agrs < 85) {
//       return "B";
//     } else if (agrs >= 85 && agrs < 90) {
//       return "A";
//     } else if (agrs >= 90) {
//       return "A+";
//     } else {
//       return "Not present, no grade given";
//     }
//   }
// };

// console.log(studentDegrees(85));

// Count Occurrences. Create a function that accepts two arguments: a string and a letter. The function should count the number of occurrences of that letter in the string.
// i.e. countOccurrences(“this is a string”, “i”) ➞ 3

const countOccurrences = (string, letter) => {
  let letterOccurrences = string.split(letter).length - 1;
  return letterOccurrences;
};
console.log(countOccurrences("this is a string", "i"));

// Create a function which calculates how old a dog is in doggie years. The function should accept one argument that is the puppy’s age in human years.
//Calculate the dog’s age in dog years based on the calculation of 1 human year = 7 dog years.
// i.e. dogAge(4) ➞ “Your doggo is 28 years old in dog years!”

const dogAge = num => {
  if (num !== NaN) {
    dogYears = num * 7;
    return `Your dog is ${dogYears} years old in dog years!`;
  } else {
    return `This is not a valid number`;
  }
};
console.log(dogAge(4));

// A Lifetime Supply... Create a function to calculate how much you’ll actually be geStting for a lifetime supply of your favourite snack.
// The function should accept two arguments: age and amount per day. The function should calculate the amount that will be consumed for the rest of your life given a constant max age.
// Bonus Accept floating point values for amount per day and round the result.
// i.e. calcSupply(25, 2) ➞ “You will need 40,150 bars of chocolate (2 a day) to last you til the age of 80.”

const supplyOfSnack = (age, amount) => {
  const maxAge = 80;
  let result = (maxAge - age) * amount * 365;
  return Math.round(result);
};

console.log(supplyOfSnack(25, 1.5));

// Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)
// * print all the user input adding the greeting part and more text turning that input into a readable text.
// * If one of his activities was dance ￼or party print "yu are cool".

const greeting = (name, age, address, ...activities) => {
  let greet = name + age + address + activities;
  if (activities == "dance" || activities == "party") {
    return `My name is ${name}, I am ${age} and I live in ${address} and my hobbies are dance and party. - Hey man, you are cool`;
  } else {
    return `My name is ${name}, I am ${age} and I live in ${address} and my hobbies are ${activities}`;
  }
};

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

const equalSlices = (slices, recipients, slicesEach) => {
  if (recipients * slicesEach > slices) {
    return false;
  } else {
    return true;
  }
};
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

const checkIf = word => {
  let smallLetters = word.toLowerCase();
  let os = smallLetters.split("o").length - 1;
  let xs = smallLetters.split("x").length - 1;

  if (os === 0 && xs === 000) {
    return `${true}: there is no instance of either "x" or "o"`;
  } else if (os !== xs) {
    return `${false}: we do not have the same number of "x" and "o"s`;
  } else if (os === xs) {
    return `${true}: we have the same number of "x" and "o"s`;
  }
};

console.log(checkIf("ooxx"));
console.log(checkIf("xooxx"));
console.log(checkIf("ooxXm"));
console.log(checkIf("zpzpzpp"));
console.log(checkIf("zzoo"));

// Validate Email. Create a function that takes a string, checks if it’s a valid email address, and then accordingly returns either true or false.
// The string must contain an “@” character.
// The string must contain a “.” character.
// The “@” must have at least one character in front of it.
// e.g. “john@example.com” is valid while “@example.com” is invalid.
// The “.” and the “@” must be in the appropriate places.
// e.g. “john.smith@com” is invalid while “john.smith@email.com” is valid.

const email = address => {
  let thirdToLast = address.substring(address.length - 4);
  let secondToLast = address.substring(address.length - 3);

  if (
    address.includes("@") &&
    address.includes(".") &&
    "@" != address[0] &&
    "." != address[0] &&
    (thirdToLast || secondToLast === ".")
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(email("johnsmith@email.com"));
console.log(email("johnsmith@emailcom"));
console.log(email("@email.com"));

// Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number

// const string1 = empty => {
//   if (empty == "") {
//     return ;
//   }
// };
// console.log(string("I am John and I like biking"));

const emptySpaces = (string, letter) => {
  let empty = " ";
  if (letter === empty) {
    let howManyTimes = string.split(letter).length - 1;
    return `There are ${howManyTimes} occurrences of this character in your text`;
  }
};

console.log(emptySpaces("I am John and I like biking", " "));

// Create a function that will receive a (user name , salary and kid’s names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.

const result = (userName, salary, ...kidsName) => {
  let kids = kidsName;
  let sum = 0;
  if (kids.length == 1) {
    sum = 0.7 * salary;
  } else if (kids.length == 2) {
    sum = 0.75 * salary;
  } else if (kids.length > 2) {
    sum = 0.8 * salary;
  } else {
    sum = 0.45 * salary;
  }
  return `${userName} 's salary after taxes is ${sum} euros.`;
};

console.log(result("John", 3000, "Lia"));
console.log(result("John", 3000, "Lia", "Betty"));
console.log(result("John", 3000, "Lia", "Betty", "Sally"));
console.log(result("John", 3000));

// Create a function that receive a text from user and check if the user has entered a phone number, and print that out
// Note : phone number should be within the German network starts with (030,017) and has 7 digits after the prefix number

// function phoneNumber(num) {
//   let strToArray = num.toLowerCase().split(" ");
//   let firstNumbers = num.substring(0, 3);
//   let restNumbers = num.substring(3, 10);
//   if ((firstNumbers === "017" || "030") && restNumbers.length == 7) {
//     return `The phone number is ${strToArray}`;
//   } else if (strToArray !== NaN) {
//     return `This is no phone number`;
//   }
//   return strToArray;
// }

// console.log(phoneNumber("0171234567"));
// console.log(phoneNumber("01712345675"));

// function isNumber(str) {
//   // Convert string to lowercase
//   str = str.toLowerCase().split(" ");
//   //console.log(str);
//   // Initialize array of months
//   const prefix = ["030", "017"];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < str.length; j++) {
//       if (str[i].includes(prefix[j])) {
//         let numberFound = str[i].slice(3, 10);
//         //console.log(numberFound.length);
//         if (numberFound.length !== 7 || isNaN(numberFound)) {
//           return `Number not found on the text..`;
//         } else {
//           return `The number ${prefix[j] + numberFound} was found in the text!`;
//         }
//       }
//     }
//   }
// }
// console.log(isNumber("Once upon 01758223462"));

// function phoneNumber(num) {
//   let strToArray = num.split("");
//   let array = [];
//   for (let i = 0; i < strToArray.length; i++) {
//     let prefixNumber1 = 030;
//     let prefixNumber2 = 017;
//     let firstNumbers = num.substring(0, 3);
//     let restNumbers = num.substring(3, num.length);

//     if (prefixNumber1 == firstNumbers && restNumbers.length == 9) {
//       return `Your number is ${prefixNumber1}${restNumbers}`;
//     } else if (prefixNumber2 == firstNumbers && restNumbers.length == 9) {
//       return `Your number is ${prefixNumber2}${restNumbers}`;
//     } else {
//       return `False number dialed`;
//     }
//   }

//   let result = strToArray.join("");
//   return result;
// }

// Write a function that checks whether the user has entered a valid German bank account.
// Note: German bank accounts should starts with and has 20 number.
// DExxxxxxxxxxxxxxxxxxxx

const validGermanAccount = acc => {
  let result = "";
  let count = 0;
  let smallLetters = acc.toLowerCase().split(" ");
  for (let i = 0; i < smallLetters.length; i++) {
    let firstCharacters = smallLetters[i].slice(0, 2);
    let restCharacters = smallLetters[i].slice(2);
    if (firstCharacters == "DE") {
      if (isNaN(restCharacters) || restCharacters.length != 20) {
        result = `This is not  valid account, try again typing it.`;
        count++;
      } else if (restCharacters == 20) {
        result = `This is a valid account.`;
        count++;
      }
    }
  }
  if (count == 0) {
    return `There was no bank account in the text`;
  }
  return result;
};
console.log(validGermanAccount("My IBAN is: DE12345678901234567890"));
console.log(validGermanAccount("DE12345678901234567890"));

//
// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.
// Examples
// numberSyllables("buf-fet") ➞ 2
// numberSyllables("beau-ti-ful") ➞ 3
// numberSyllables("mon-u-men-tal") ➞ 4
// numberSyllables("on-o-mat-o-poe-ia") ➞ 6

function syllablesCount(word) {
  let smallLetters = word.toLowerCase().split("-");
  let result = smallLetters.length;
  return result;
}
console.log(syllablesCount("beau-ti-ful"));

// Create a function that takes an array of numbers. Return the largest number in the array.
// Examples
// findLargestNum([4, 5, 1, 3]) ➞ 5
// findLargestNum([300, 200, 600, 150]) ➞ 600
// findLargestNum([1000, 1001, 857, 1]) ➞ 10

function largestNumber(num) {
  if (num != NaN) {
    return Math.max(...num);
  } else {
    return false;
  }
}

console.log(largestNumber([4, 5, 1, 3]));

// The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius which is 30.
// Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature.
// Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertToF(celsius) {
  let num = celsius * (9 / 5);
  let fahrenheit = num + 32;
  return fahrenheit;
}

convertToF(30);

// Given a number n, write a function that returns PI to n decimal places.
// Examples
// myPi(5) ➞ 3.14159
// myPi(4) ➞ 3.1416
// myPi(15) ➞ 3.141592653589793
// Notes
// n will not be above 15, to keep this challenge simple.
// Round up the last digit if the next digit in PI is greater or equal to 5 (see second example above).
// The return value must be a number, not a string.

function decimalPlacesOfPi(num) {
  let decimalPi = Math.PI;
  let dex = decimalPi.toFixed(num);
  // let be = Math.round(dex, 4);
  return dex;
}
console.log(decimalPlacesOfPi(5));

// Write a function will give the alphabetical order for a passed character
//  i.e.  A -> 1
// B -> 2

const characterValue = letter => letter.toLowerCase().charCodeAt(0) - 96;
console.log(characterValue("W"));
console.log(characterValue("a"));
