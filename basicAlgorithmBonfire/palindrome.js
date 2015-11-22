(function(){

  function palindrome(str) {
    // Good luck!
    str = str.toLowerCase();
    var halfLength = Math.ceil((str.length) / 2);
    var secondStr = str.slice(halfLength);
    var firstStr = str.slice(0, (halfLength - 1));
    if (str.replace(/oneHalfStr/i))      
    return true;
  }

  function pali(str) {
    var halfLength, firstStr, secondStr;
    str = str.toLowerCase();
    if (str.length % 2 === 0) {
      halfLength = str.length / 2;
    } else {
      halfLength = (str.length - 1) / 2;
    }
    firstStr = str.slice(0, halfLength - 1);
    secondStr = str.slice(halfLength);
    if (firstStr === secondStr) {
      return true;
    } else {
      return false;
    }
  }

  function palin(str) {
    str = str.toLowerCase().replace(/\W/g, '').replace(/_/, '');
    if (str.split('').reverse().join('') === str) {
      return true;
    } else {
      return false;
    }
  }

}());