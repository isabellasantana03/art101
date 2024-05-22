/*Author: Isabella Santana
Date: May 20 2023 */

//$(document).ready(function() {
//  $('#button').click(function() {
//        const inputVal = $('#input').val();
//        $('#output').text(`Hello, ${inputVal}! Your name has been entered.`);
 //   });
//});

document.addEventListener("DOMContentLoaded", function() {
    function sortingHat(str) {
        // Count the letters in the string
        const length = str.length;
        // Get the remainder with 4
        const mod = length % 4;
        // Return the house based on the value of mod
        if (mod === 0) {
            return "Gryffindor";
        } else if (mod === 1) {
            return "Ravenclaw";
        } else if (mod === 2) {
            return "Slytherin";
        } else {
            return "Hufflepuff";
        }
    }

    document.getElementById("button").addEventListener("click", function() {
        // Get the value of the input field
        const name = document.getElementById("input").value;
        // Run sortingHat and store the result
        const house = sortingHat(name);
        // Append a new styled paragraph to the output div
        const outputDiv = document.getElementById("output");
        const paragraph = document.createElement("p");
        paragraph.textContent = "The Sorting Hat has sorted you into " + house;
        outputDiv.appendChild(paragraph);
    });
});
