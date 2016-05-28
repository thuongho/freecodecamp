var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUp(firstName, prop){
// Only change code below this line
  var msg;
  
  for (var i=0; i< contacts.length; i++) {
    console.log(contacts[i].firstName);
    if (contacts[i].firstName === firstName) {
        console.log("firstName matches");
      if (contacts[i][prop]) {
        //return contacts[i][prop];
        console.log("contact exists, prop matches");
        console.log(contacts[i][prop]);
        //msg = contacts[i][prop];
      } else {
        // return "No such property";
        //console.log("No such property");
        console.log("contact exists, no prop");
        //msg = "No such property";
      }
    }
      // return "No such contact";
      console.log("no such contacts");

  }
  
// Only change code above this line
}

// Change these values to test your function
lookUp("Akira", "likes");