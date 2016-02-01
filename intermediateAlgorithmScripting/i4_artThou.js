// function where(collection, source) {
//   var arr = [];
//   // What's in a name?
//   var keyName = Object.keys(source).toString();
//   for (var name in collection) {
//     console.log("starting..." + name);
//     console.log(name.hasOwnProperty(keyName));
//     console.log(collection[name][keyName]);
//     if (collection[name].hasOwnProperty(keyName)) {      
//       if (collection[name][keyName] === source[keyName]) {
//         arr.push(collection[name]);
//       }
//     }
//   }

//   function contains(obj1, obj2) {
//     var obj2Keys = Object.keys(obj2);
//     // for (var i= 0; i <= obj2Keys.length; i++) {}
//     for (var key in obj2Keys) {
//       while (obj1.hasOwnProperty(obj2Keys[key])) {

//       }
//     }
//   }
//   return arr;
// }


// function where(collection, source) {
//   var arr = [];
//   // What's in a name?
//   var keyName = Object.keys(source).map(function(k) {return k;});
//   for (var name in collection) {
//     console.log("starting..." + name);
//     console.log("name.hasOwnProperty(keyName): " + name.hasOwnProperty(keyName));
//     console.log("collection[name][keyName]: " + collection[name][keyName]);
//     if (!collection[name].hasOwnProperty(keyName)) {
//       break;
//     }
//     if (collection[name][keyName] !== source[keyName]) {
//       break;
//     }
//     arr.push(collection[name]);
//   }
//   return arr;
// }


// for (var i =0; i<collection.length; i++) {
//   console.log("collection[" +i + "]: " + JSON.stringify(collection[i]));
//   for (var name in source) {
//     console.log("collection[" +i + "][" + name + "]: " + JSON.stringify(collection[i][name]));
//     console.log("source[" + name + "]: " + source[name]);
//     if (collection[i][name] !== source[name]) {
//       break;
//     }
//   }
// } 


// for (var i =0; i<collection.length; i++) {
//   var addToArr = false;
//   console.log("collection[" +i + "]: " + JSON.stringify(collection[i]));
//   for (var x=0; x<source.length; x++) {
//     console.log("collection[" +i + "][" + source[x] + "]: " + JSON.stringify(collection[i][source[x]]));
//     console.log("source[" + x + "]: " + source[x]);
//     if (collection[i][source[x]] !== source[x]) {
//       addToArr = false;
//       console.log(addToArr);
//       break;
//     }
//     addToArr = true;
//   }
//   if (addToArr = true) {
//     arr.push(collection[i]);
//   }
// }

// *********** winning answer ************
function where(collection, source) {
  var arr = [];
  var addToArr = false;
  for (var i =0; i<collection.length; i++) {
    for (var name in source) {
      if (!collection[i].hasOwnProperty(name) || collection[i][name] !== source[name]) {
        addToArr = false;
        break;
      }
      addToArr = true;
    }
    if (addToArr === true) {
      arr.push(collection[i]);
    }
  }  
  return arr;
}
// *********************************************

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })