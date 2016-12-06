'use strict';

// Naive prime determination
function isPrime (i) {
  if ((i % 2 === 0) || (i % 3 === 0) || (i % 5 === 0) || (i % 7 === 0) || (i % 11 === 0)) return false;

  const sqrtJ = Math.ceil(Math.sqrt(i));

  for (let j = 13; j <= sqrtJ; j += 2) {
    if (i % j == 0) return false;
  }
  return true;
}

// Return largest prime Factor
function findFactor (target) {
  const targetSqrt = Math.ceil(Math.sqrt(target)),                        // Maximum possible prime factor
        resultMax  = targetSqrt % 2 === 0 ? targetSqrt + 1 : targetSqrt;  // If sqrt is even, use sqrt + 1 (odd)

  // Check all odd numbers from resultMax to 3
  for (let i = resultMax; i > 2; i -= 2) {

    // If candidate is divisible by target and is prime, return candidate
    if (target % i == 0 && isPrime(i)) return i;
  }
  
  // If no larger factor was found
  if (target % 2 === 0) return 2;
  return 1;
}

console.log(findFactor(600851475143));