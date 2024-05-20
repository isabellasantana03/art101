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


$(document).ready(function() {
    // Existing code...

   // Event listener for changing text color
   $("#change-color").click(function() {
    $(".text").css("color", getRandomColor());
});
  // Event listener for glitching the page
  $("#glitch").click(function() {
    glitchPage();
});
// Helper function to get a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to glitch the page
function glitchPage() {
    $(".text").each(function() {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        $(this).css({
            position: 'relative',
            top: top + 'px',
            left: left + 'px'
        });
    });

    setTimeout(resetGlitch, 1000); // Reset glitch after 1 second
}

// Function to reset the glitch effect
function resetGlitch() {
    $(".text").css({
        position: 'static',
        top: '0px',
        left: '0px'
    });
}
});