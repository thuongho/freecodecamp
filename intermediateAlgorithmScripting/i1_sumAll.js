function sumAll(arr) {
  var num1 = arr[0],
      num2 = arr[1];
  
  if (num1 > num2) {
    num1 = arr[1];
    num2 = arr[0];
  }
  for (var i = num1+1; i < num2; i++) {
    arr.push(i);
  }
  arr.reduce(function(a,b) {return a + b;});
}

sumAll([1, 4]);
