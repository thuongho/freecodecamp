function every(collection, pre) {
  // Is everyone being true?
  var test = true;
  for (var i = 0; i < collection.length; i++) {
    console.log('collection[i', collection[i]);
    console.log('pre', pre);
    console.log('collection[i].pre', collection[i][pre]);
    var testCase = collection[i][pre];
    if (testCase === undefined || testCase === 0 || testCase === "" || valueIsNaN(testCase) || testCase === null) {
      // console.log(testCase);

      test = false;
      break;
    }
  }
  function valueIsNaN(v) { return v !== v; }
  
  return test;
}

every([{"single": "yes"}], "single")

every([{"single": "double"}, {"single": NaN}], "single")
