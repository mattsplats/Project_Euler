'use strict';

function nthPrime (n, debug) {
  let currentN  = 10,
      testValue = 27;

  if (debug) {
    console.log("The 1st prime is: 2");
    console.log("The 2nd prime is: 3");
    console.log("The 3rd prime is: 5");
    console.log("The 4th prime is: 7");
    console.log("The 5th prime is: 11");
    console.log("The 6th prime is: 13");
    console.log("The 7th prime is: 17");
    console.log("The 8th prime is: 19");
    console.log("The 9th prime is: 23");
  }

  while (currentN <= n) {
    testValue += 2;
    if (isPrime(testValue)) {
      if (debug) console.log("The " + currentN + "th prime is: " + testValue);
      currentN++;
    }
  }

  return testValue;
}

function isPrime (i) {
  if ((i % 2 != 0) && (i % 3 != 0) && (i % 5 != 0) && (i % 7 != 0) && (i % 11 != 0) && (i % 13 != 0) && (i % 17 != 0) && (i % 19 != 0) && (i % 23 != 0)) {
    const sqrt = Math.ceil(Math.sqrt(i));

    for (let j = 29; j <= sqrt; j += 2) {
      if (i % j == 0) return false;
    }
    return true;
  } 
  return false;
}

console.log(nthPrime(process.argv[2] || 10001));