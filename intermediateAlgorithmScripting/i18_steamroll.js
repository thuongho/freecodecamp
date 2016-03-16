function steamroller(arr) {
  // I'm a steamroller, baby
  var newArr = [];

  flatten(arr);

  function flatten(n) {
    for (var i = 0; i < n.length; i++) {
      if (!Array.isArray(n[i])) {
        newArr.push(n[i]);
      } else {
        flatten(n[i]);
      }
    }
  }
  return newArr;
}

steamroller([1, [2], [3, [[4]]]]);