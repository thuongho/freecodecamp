function drop(arr, func) {
  // Drop them elements.
  while (arr.length) {
    if (func(arr[0]) === true) {
      break;
    }
    arr.shift();
  }
  return arr;
}

drop([1, 2, 3], function(n) {return n > 0;});
