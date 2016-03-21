function telephoneCheck(str) {
  // Good luck!
  var phoneRegex = /^[1]? ?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;

  if (phoneRegex.test(str)) {
    return true;
  } else {
    return false;
  }
  
}

telephoneCheck("555-555-5555");