// index.js - Lab 6: Arrays and Objects 
// Author: Isabella 
// Date: April 25, 2024

//Define Variables 
myTransport = ["Chevy Tahoe, bike, bus, rides from friends,Uber",]

//create an object for my main ride 
myMainRide = {
  make: "Ford",
  model: "Tahoe",
  color: "Silver Birch",
  year: "2006",
  //we can define a function within our object (called a method)
  //that uses the value of year above (using this.year)
  age: function () {
    return 2024 - this.year;
  }
}

//output 
document.writeln("Kinds of Transportation I Use", myTransport, "</br>");
//this little trick allows us to write an object to the document 
document.writeln("My Main Ride:<pre>",
  JSON.stringify(myMainRide, null,'\t'),"</pre>");



// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
