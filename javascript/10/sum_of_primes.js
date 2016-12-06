'use strict';

function sumOfPrimes (maxPrime) {
  let sum = 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23;

  for (let testNum = 29; testNum < maxPrime; testNum += 6) {
    if (isPrime(testNum)) {
      sum += testNum;
    }
    if (isPrime(testNum + 2)) {
      sum += testNum + 2;
    }
  }

  return sum;
}

function isPrime (i) {
  if ((i % 5 != 0) && (i % 7 != 0) && (i % 11 != 0) && (i % 13 != 0) && (i % 17 != 0) && (i % 19 != 0) && (i % 23 != 0)) {
    const max = Math.ceil(Math.sqrt(i));
    
    for (let j = 29; j <= max; j += 6) {
      if (i % j == 0) return false;
      if (i % (j + 2) == 0) return false;
    }
    return true;
  } 
  return false;
}

console.log(sumOfPrimes(2000000));