'use strict';

while (true) {
  const firstNum = Math.ceil(Math.random() * 998),
        secondNum = Math.ceil(Math.random() * (999 - firstNum)),
        thirdNum = 1000 - firstNum - secondNum,
        numArr = [firstNum, secondNum, thirdNum];

  numArr.sort((a, b) => a-b);
  
  const [a, b, c] = numArr;

  if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) return console.log(numArr);
}
