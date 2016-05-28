function fearNotLetter(str) {
  for (var i=0; i<str.length -1; i++) {
    if (str.charCodeAt(i+1) !== (str.charCodeAt(i) +1)) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");

// hints
// String.charCodeAt()
// 'ABC'.charCodeAt(0); // returns 65

// String.fromCharCode()
// String.fromCharCode(65, 66, 67);  // "ABC"
