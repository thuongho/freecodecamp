function sumFibs(num) {
  'use strict';
  // fib sequence 1, 1, 2, 3, 5 and 8
  var prevNum = 0;
  var currentNum = 1;
  var nextNum = 0;
  var sumOfOdds = 0;

  while (nextNum <= num) {
    nextNum = prevNum + currentNum;
    prevNum = currentNum;
    if (prevNum % 2 !== 0) {
      sumOfOdds += prevNum;
    }
    currentNum = nextNum;
  }
  return sumOfOdds;
}

sumFibs(4);