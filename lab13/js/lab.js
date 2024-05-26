// Lab 13 - FizzBuzz Experiment with Loops 
// Author: Isabella Santana 
// Date: 5/24/24

// Function to perform FizzBuzz logic
function fizzBuzzBoom(maxNums, factorObj) {
    let outputContainer = $("#output");
    outputContainer.empty(); // Clear previous results

    for (let num = 1; num <= maxNums; num++) {
        let outputStr = "";
        for (let factor in factorObj) {
            if (num % factor == 0) {
                outputStr += factorObj[factor];
            }
        }

        if (outputStr) {
            outputStr = " - " + outputStr + "!";
        }

        let resultDiv = $("<div></div>").addClass("result").html(num.toString() + outputStr);
        outputContainer.append(resultDiv);
    }
}

function reportError(str) {
    $("#output").html("<div class='error'>" + str + "</div>");
}

document.getElementById("submit").addEventListener("click", function () {
    let max = document.getElementById("max").value;
    if (!max) {
        reportError("You must provide a maximum");
        return;
    }

    max = parseInt(max);
    if (isNaN(max) || max <= 0) {
        reportError("Please enter a valid positive number");
        return;
    }

    const factors = {};
    for (let i = 0; i < 4; i++) {
        let factor = parseInt(document.getElementById(`num${i}`).value);
        let text = document.getElementById(`text${i}`).value;
        if (!isNaN(factor) && factor > 0 && text) {
            factors[factor] = text;
        }
    }

    fizzBuzzBoom(max, factors);
});
