// function largestOfFour(arr) {
//   // You can do this!
//   var largestArr =[];

//   function findLargestNumber(arry) {
//     console.log(typeof arry);
//     return arry.sort()[arry.length - 1];
//   }
//   arr.map(function(e) {
//     // if (typeof e === "object") {
//     //   for (var i = 0; i <= e.length; i++) {
//     //     largestArr.push(findLargestNumber(e[i]));
//     //   }
//     // } else {
//       largestArr.push(findLargestNumber(e));
//     // }
//   });
//   console.log(largestArr);
//   arr = largestArr;
//   return arr;
// }

function largestOfFour(arr) {
  // You can do this!
  // var largestArr =[];

  // function findLargestNumber(arry) {
  //   return arry.sort(function(a,b){
  //     return a - b;
  //   })[arry.length - 1];
  // }
  
  // arr.map(function(e) {
  //   largestArr.push(findLargestNumber(e));  
  // });
  // arr = largestArr;
  // return arr;
}

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


function end(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  // if (str.substr(-target.length) === target) {
  //   return true;    
  // } else {
  //   return false;
  // }

}

// end("Bastian", "n");

function repeat(str, num) {
  // repeat after me
  // var msg = '';
  // if (num >= 0) {
  //   for (var i =0; i < num; i++) {
  //     msg += str;
  //   }
  //   str = msg;
  // } else {
  //   str = '';
  // }
  //   return str;
}

// repeat("abc", 3);

function truncate(str, num) {
  // Clear out that junk in your trunk
  // if (str.length <= 3) {
  //   str = str.replace((str.slice(num)), '...');
  // } else if (str.length > num) {
  //   str = str.replace((str.slice(num - 3)), '...');
  // }
  // return str;
}

// truncate("A-tisket a-tasket A green and yellow basket", 11);

// function chunk(arr, size) {
//   // Break it up.
//   var tempArr = [];
//   var numOfArr = Math.ceil(arr.length / size);
//   for (var i = 0; i < numOfArr; i++) {
//     for (var x = 0; x < size; x++) {
//       tempArr.push(arr.pop());
//     }
//     arr.push(tempArr);
//     tempArr = [];
//   }
//   arr = tempArr;
//   return arr;
// }

function chunk(arr, size) {
  // Break it up.
  // var innerArr = [],
  //     outerArr = [],
  //     numOfArr = Math.ceil(arr.length / size);

  // while (arr.length > 0) {
  //   for (var i = 0; i < size; i++) {
  //     var element = arr.shift();

  //     innerArr.push(element);  
  //     if (arr.length === 0) {
  //       break;
  //     }

  //   }
  //   outerArr.push(innerArr);
  //   innerArr = [];
  // }
  // arr = outerArr;
  // return arr;
}

// chunk(["a", "b", "c", "d"], 2);

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  // arr = arr.slice(howMany);
  // return arr;
}

// slasher([1, 2, 3], 2);

function mutation(arr) {
  // var mainStr = arr[0].toLowerCase().split(''),
  //     targetStr = arr[1].toLowerCase().split('');

  // for (letter in targetStr) {
  //   if (mainStr.indexOf(targetStr[letter]) === -1) {
  //     return false;
  //   }
  // }
  // return true;
}

// mutation(["hello", "hey"]);


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // arr = arr.filter(function(val) {
  //   if ((val !== false) || (val !== NaN) || (val !== null) || (val !== "undefined") || (val !== 0) || (val !== "")) {
  //     return val;
  //   }
  // });
  // return arr;
}

// bouncer([7, "ate", "", false, 9]);

function destroyer(arr) {
  // Remove all the values
  // var mainArr = arguments[0],
  //     tempArr = [],
  //     argsLen = arr.length;
  // console.log("mainArr: " + mainArr);

  // for (var i = (argsLen -1); i > (argsLen - 3); i--) {
  //   tempArr = [];
  //   mainArr.map(function(val) {
  //     console.log("args["+ i +"]: " + arr[i]);
  //     console.log("value: " + val);
  //     if (val !== arr[i]) {
        
  //       tempArr.push(val);
  //     }
  //     console.log("tempArr:  " + tempArr);
  //   });

  //   mainArr = tempArr;
  //   console.log("mainArr: " + mainArr);
  // }
  // arr = tempArr;
  // return arr;
}

function destroyer(arr) {
  // Remove all the values
  var mainArr = arr[0],
      destroyerElem = arr.slice(1);

  // function nonMatchNum(value, targetNum) {
  //   return value !== targetNum;
  // }

  
  for (var i = 0; i < destroyerElem.length; i++) {
    arr = [];
    mainArr.map(function(val) {
      if (val !== destroyerElem[i]) {
        arr.push(val);
      }
    });
    mainArr = arr;
  }
 
  return arr;
}

function destroyer(arr) {
  // Remove all the values
  // var mainArr = arguments[0],
  //     tempArr = [],
  //     argsAll = arguments;
  // console.log("arg's length: " + arguments.length);
  // console.log("mainArr: " + mainArr);

  // for (var i = (argsAll.length -1); i > 0; i--) {
  //   tempArr = [];
  //   mainArr.map(function(val) {
  //     console.log("args["+ i +"]: " + argsAll[i]);
  //     console.log("value: " + val);
  //     if (val !== argsAll[i]) {
        
  //       tempArr.push(val);
  //     }
  //     console.log("tempArr:  " + tempArr);
  //   });

  //   mainArr = tempArr;
  //   console.log("mainArr: " + mainArr);
  // }
  // arr = tempArr;
  // return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

function destroyer(arr) {
  console.log(arr);
  console.log(typeof arr);
  console.log(arr[arr.length-1]);
  console.log(arr.length);
  console.log(arguments);
  console.log(arguments.length);
  console.log(arguments[3]);
  // console.log(arguments.slice(1));
  for (var i = (arguments.length -1); i > 0; i--) {
    console.log("i: " + i);
    console.log("args["+ i+": " + arguments[i]);
  }
}

destroyer([3, 5, 1, 2, 2], 2, 3, 5)

function where(arr, num) {
  // Find my place in this sorted array.
  // arr.push(num);
  // arr.sort(function(a,b) {
  //   return a - b;
  // });
  // return arr.indexOf(num);
}

// where([40, 60], 50);