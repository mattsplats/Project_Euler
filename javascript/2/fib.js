'use strict';

const TARGET_SUM = 4000000;
let fibArr = [0,1],
    lastSum = 1,
    result = 0;

function nextSum () {
  return fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
}

while (lastSum < TARGET_SUM) {
  fibArr.push(lastSum);
  lastSum = nextSum();
}

for (let i = 0; i < fibArr.length; i++) {
  if (fibArr[i] % 2 == 0) result += fibArr[i];
}

console.log(result);