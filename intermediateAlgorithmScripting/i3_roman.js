function convert(num) {
  var romanNum = {
    one: "I",
    five: "V",
    ten: "X",
    fifty: "L",
    hundred: "C",
    fiveHundred: "D",
    thousand: "M"
  };
  
  var roman = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };
  
 var romanArr = [];
  var numArr = num.toString().split('');
  var numLen = numArr.length - 1;
  
  // 3999
  // numArr = [ '3', '9', '9', '9' ]
  // numLen = 4
    while (numLen >= 0) {
      romanArr.push(padChar(numArr.shift(),numLen, '0'));
      numLen--;
    }
  
    function padChar(num, numTimes, charX) {
      num = num.toString();
      for (var i =0; i < numTimes; i++){
        num = num.concat(charX);
      }
      //num = parseInt(num);
      return num;
    }
  // romanArr = [ 3000, 900, 90, 9 ]
  romanArr.forEach(breakDownNumToRoman);
  
  function breakDownNumToRoman(arg) {
    // arg = 3000
    var firstNum = arg[0],
        romanType = '';
    console.log(firstNum);
    switch (firstNum) {
      case "1":
      case "5":
        console.log(roman[arg]);
        romanArr.push(roman[arg]);
        break;
      case "2":
      case "3":
        romanType = roman[padChar(1, arg.length -1, '0')];
        console.log(romanType);
        romanArr.push(padChar(romanType, firstNum -1, romanType));
        break;
      case "4":
      case "9":
        romanType = roman[1].concat(roman[firstNum + 1]);
        console.log(romanType);
        romanArr.push(romanType);
        break;
      case "6":
      case "7":
      case "8":
        romanType = padChar(roman[5], firstNum - 5, roman[1]);
        console.log(romanType);
        romanArr.push(romanType);
        break;
    }
    romanArr.shift();
    console.log(romanArr);
  }
 return romanArr.join("");
}

convert(36);
