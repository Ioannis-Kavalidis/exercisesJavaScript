// Create a function  average which accepts any amount of numbers and returns their mean average.

function average(...args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  let avg = total / args.length;
  return avg;
}

console.log(average(1, 2, 3, 4, 5, 6, 7));
