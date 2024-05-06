// index.js - Lab 8: Anon Functions and Callbacks 
// Author: Isabella 
// Date: May 3, 2024

$(document).ready(function(){
    //Your map results data
    var mapResults = "Your mao results here";

    //use jQuery to select the element by its ID and set the HTML content
    $("#output").html(mapResults)

    console.log("If this shows in the console, jQuery is loaded and running!");

});
//Constants 

//Functions 
var numberArray = [1, 2, 3, 4, 5];

function addFive(x) {
    var results = x + 5;
    return results;
}

//test function
console.log(addFive(10));
console.log(addFive(-3));
console.log(addFive(0));

numbersArray.map(addFive);
var result = numbersArray.map(addFive);
console.log(result);

var squaredResults = numbersArray.map(function(x){
    var results = x * x;
    return results;
});

console.log("Squred Reslts: ", squaredResults);