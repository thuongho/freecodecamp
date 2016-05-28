function unite(arr1, arr2, arr3) {
  var args = Array.prototype.slice.call(arguments);
  var concatArgs = [];
  
  concatArgs = args.reduce(function(a,b) {
    return a.concat(b);
  });

  var targetIndex = 0;
  var target;

  while (targetIndex <= concatArgs.length){
    target = concatArgs[targetIndex];
    for (var i = targetIndex+1; i < concatArgs.length; i++) {
      if (concatArgs[i] === target) {
        concatArgs.splice(i, 1);
      }
    }
    targetIndex++;
  }
  return concatArgs;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);