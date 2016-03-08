function unite(arr1, arr2, arr3) {
  var args = Array.prototype.slice.call(arguments);
  var c;

  console.log(args);
  args.reduce(function(previousValue, currentValue, currentIndex, array) {
     c += previousValue + currentValue;
     console.log('c',c);
  }, args[0]);
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);


[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  return previousValue + currentValue;
}, 10);

