function sumPrimes(num) {
  'use strict';
  var sum = 0;

  for (var currentNum = 2; currentNum <= num; currentNum++) {
    for (var divNum = currentNum-1; divNum > 0; divNum--) {
      
      if ((currentNum % divNum === 0)) {
        if (divNum === 1) {
          // console.log('currentNum', currentNum);
          sum += currentNum;
          // console.log('sum', sum);
        } else {
          break;
        }
      }
    }
  }
  return sum;
}

sumPrimes(10);
