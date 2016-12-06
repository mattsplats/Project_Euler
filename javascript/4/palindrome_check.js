'use strict';

let result = 0;

for (let i = 999; i > 100; i--) {
  for (let j = 999; j > 100; j--) {
    const product = i * j;

    if (palindromeCheck(product)) {
      if (product > result) result = product;
    }
  }
}

function palindromeCheck (number) {
  return number.toString() === number.toString().split('').reverse().join('');
}

console.log(result);
