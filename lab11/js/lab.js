/*
   lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

   Author: Isabella Santana
   Date: May 20 2023
*/

$(document).ready(function() {
    // Function to sort the string
    function sortString(inputString){
        return inputString.split('').sort().join('');
    }

    // Click listener for button
    $("#submit").click(function(){
        const userName = $("#user-name").val();
        const userNameSorted = sortString(userName);
        $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
    });
});

