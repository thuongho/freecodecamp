function smallestCommons(arr) {

  var s, e;
  var common = 0;
  var count = 1;
  var foundCommon = false;

  s = arr[0] > arr[1] ? arr[1] : arr[0];
  e = arr[0] > arr[1] ? arr[0] : arr[1];

  while (foundCommon !== true) {
    common = e * count;
    for (var i = s; i <= e; i++) {
      if (common % i !== 0) {
        break;
      } else if (i === e) {
        foundCommon = true;
        break;
      }
    }
    count++;
  }
  
  return common;
}


smallestCommons([1,5]);
