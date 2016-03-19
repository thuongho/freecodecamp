function add() {
  var sum = 0;

  countingNumbers(arguments[0]);

  if (arguments.length > 1) {
    return countingNumbers(arguments[1]);
  } else {
    console.log('under 1');
    return countingNumbers;    
  }

  function countingNumbers(arg){
    if (typeof arg === 'number'){
      sum += arg;
      console.log('sum', sum);
      return sum;
    } else {
      return undefined;
    }
  }
}

add("http://bit.ly/IqT6zt");
add(2,3);
add(2, 3);