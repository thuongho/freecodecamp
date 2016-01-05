function where(collection, source) {
  var arr = [];
  // What's in a name?
  var keyName = Object.keys(source).toString();
  for (var name in collection) {
    console.log("starting..." + name);
    console.log(name.hasOwnProperty(keyName));
    console.log(collection[name][keyName]);
    if (collection[name].hasOwnProperty(keyName)) {      
      if (collection[name][keyName] === source[keyName]) {
        arr.push(collection[name]);
      }
    }
  }

  function contains(obj1, obj2) {
    var obj2Keys = Object.keys(obj2);
    // for (var i= 0; i <= obj2Keys.length; i++) {}
    for (var key in obj2Keys) {
      while (obj1.hasOwnProperty(obj2Keys[key])) {

      }
    }
  }
  return arr;
}


function where(collection, source) {
  var arr = [];
  // What's in a name?
  var keyName = Object.keys(source).map(function(k) {return k;});
  for (var name in collection) {
    // console.log("starting..." + name);
    // console.log(name.hasOwnProperty(keyName));
    // console.log(collection[name][keyName]);
    if (!collection[name].hasOwnProperty(keyName)) {
      break;
    }
      if (collection[name][keyName] !== source[keyName]) {
        
        break;
      }
    arr.push(collection[name]);
  }
  
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })