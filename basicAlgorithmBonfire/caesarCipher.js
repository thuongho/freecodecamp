function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  function plusThirteenAlphaOnly(c) {
    if (c.toUpperCase().match(/[A-Z]/)) {
      //console.log(c + c.charCodeAt(0));
      c = c.charCodeAt(0) + 13;
      //console.log(c);
      if (c > 90) {
        c = (c - 90) + 64;
        //console.log(c);
        //console.log(String.fromCharCode(c) + c);
      }
      c = String.fromCharCode(c);
      //console.log(c + c.charCodeAt(0));
      
    }
    decodedArr.push(c);
  }
  codeArr.forEach(plusThirteenAlphaOnly);
  
  
  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");

