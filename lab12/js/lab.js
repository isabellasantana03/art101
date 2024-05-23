/* Author: Isabella Santana
   Date: May 20 2023 */

   $(document).ready(function() {
    function sortingHat(str) {
        // Count the letters in the string
        const length = str.length;
        // Get the remainder with 4
        const mod = length % 4;
        // Return the house based on the value of mod along with a two-word description
        if (mod === 0) {
            return "Gryffindor - Brave and Courageous";
        } else if (mod === 1) {
            return "Ravenclaw - Wise and Intelligent";
        } else if (mod === 2) {
            return "Slytherin - Ambitious and Cunning";
        } else {
            return "Hufflepuff - Loyal and Patient";
        }
    }

    $('#button').click(function() {
        // Clear the output div
        $('#output').empty();
        
        // Get the value of the input field
        const name = $('#input').val();
        // Run sortingHat and store the result
        const house = sortingHat(name);
        // Append a new styled paragraph to the output div
        $('#output').append(`<p>The Sorting Hat has sorted you into ${house}</p>`);
    });
});
