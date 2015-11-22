(function(){

  var scrapbook = document.getElementById("playground");

  function factorialize(num) {
    var total = num;
    if (num < 1) {
      return 1;
    } else {
      for (var i=1; i < num; i++) {
        total *= i;
      }
      num = total;
      return num;
    }
  }

  // factorialize(5);

  // scrapbook.innerHTML = factorialize(5);

  function fac(num) {
    var totalArray = [];
    for (var a =1; a <= num; a++) {
      totalArray.push(a);
    }
    num = totalArray.reduce(function(c,b) {
      return c * b;
    });
    return num;
  }

  // scrapbook.innerHTML = fac(5);

}());