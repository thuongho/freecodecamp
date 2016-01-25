function convert(num) {
  var roman = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };
  
  var newRoman = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
    2000: "MM",
    3000: "MMM"
  };
    // variables
  var numArry = [];
  var romanArr = [];
  
  // split 3999 to [ '3', '9', '9', '9' ]
  numArry = num.toString().split('');
  //$answer.text("numArry: " + numArry);
  var length = numArry.length -1;
  // add zeros to individual numbers
  // 3000 900 90 9
   
  // iterate through and add zeros to the nums in array
  for (var i =0; i < numArry.length; i ++) {
    for (var y=0; y < length; y++) {
      numArry[i] += '0';
    }
    romanArr.push(newRoman[numArry[i]]);
    length--;
  }
 return romanArr.join("");
  
  // alternative base on length
  // is numLen = 1
  // indexOf (0 or numLen - numLen) is I or V or IX
  
  // is numLen = 2
  // indexOf (0 or numLen - numLen) is X
  // indexOf (1 or numLen - numLen-1) is I or V or IX
  
  // is numLen = 3
  // indexOf (0 or numLen - numLen) is C
  // indexOf (1 or numLen - numLen-1) is X or L or XC
  // indexOf (2 or numLen - numLen-2) is I or V or IX
  
  // [3000,900,90,9]
  // is numLen = 4
  // indexOf (0 or numLen - numLen) is M
  // 3000
  // indexOf (1 or numLen - numLen-1) is C or D or CM
  // 900
  // indexOf (2 or numLen - numLen-2) is X or L or XC
  // 90
  // indexOf (3 or numLen - numLen-3) is I or V or IX
  // 9
}

convert(3999);
