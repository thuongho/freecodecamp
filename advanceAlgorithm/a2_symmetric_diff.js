function sym(args) {

  var flattenedArray = [];
  var answerArray = [];
  var symObj = {};

  var mergedArray = Array.prototype.slice.call(arguments);

  // flatten the array
  flattenedArray = mergedArray.reduce(function (a,b) {
    return a.concat(b);
  });

  // push to object
  for (var i = 0; i < flattenedArray.length; i++) {
    // if current number is not dup of next number
    if (flattenedArray[i] !== flattenedArray[i+1]) {
      // push to obj and count
      if (symObj[flattenedArray[i]]) {
        symObj[flattenedArray[i]]++;
      } else {
        symObj[flattenedArray[i]] = 1;
      }
    }
  }

  // return args;
  console.log('symObj', symObj);

  // iterate through the symObj and look for value 1
  for (var key in symObj) {
    if (symObj[key] % 2 !== 0) {
      answerArray.push(parseInt(key));
    }
  }

  if (answerArray.length) {
    return answerArray;
  } else {
    return args;
  }
}

sym([1, 2, 3], [5, 2, 1, 4]);