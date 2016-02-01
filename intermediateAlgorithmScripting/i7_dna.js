function pair(str) {
  var arr = str.split('');
  var dnaPair = "";
  var arrLen = arr.length;

  for (var x=0; x < arrLen; x++) {
    var newArr = [];
    var dna = arr.shift();
    newArr.push(dna);
    if (dna === 'G') {
      dnaPair = 'C';
    } else if (dna === 'C') {
      dnaPair = 'G';
    } else if (dna === 'T') {
      dnaPair = 'A';
    } else {
      dnaPair = 'T';
    }
    newArr.push(dnaPair);
    arr.push(newArr);
  }
  return arr;
}

pair("GCG");