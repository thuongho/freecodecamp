function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  newArr = arr1.concat(arr2);
  newArr.sort();

  var newArrLen = newArr.length;
  for (var i = 0; i < newArrLen; i++) {
    if (newArr[i] === newArr[i +1]) {
      delete newArr[i];
      delete newArr[i+1];
    }
  }
  
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
