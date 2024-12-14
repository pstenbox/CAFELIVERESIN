$(document).ready(function() {
    var prizes = {
        '0': 'Starbucks card',
        '45': 'Play Again',
        '135': 'Starbucks card',
        '180': 'Play Again',
        '225': 'Starbucks card',
        '98': 'Play Again',
        '101': 'Play Again',
        '270': 'Starbucks card',
        '92': 'Play Again',
        '315': 'Play Again',
        '47': 'Play Again',
        '253': 'Play Again',
        '90': 'Play Again'
    };
    var winningAngles = ['0','135', '225', '270']; // Angles that correspond to Starbucks cards
    var losingAngles = ['45', '180', '315', '101', '98', '92', '47', '253', '90']; // Angles that correspond to 'Play Again'
    var currentRotation = 0;
    var spinning = false;

    function startPassiveRotation() {
        setInterval(function() {
            if (!spinning) {
                currentRotation += 1;
                $("#wheel").css({ 'transform': 'rotate(' + currentRotation + 'deg)' });
            }
        }, 100);
    }

    function spinWheel() {
        spinning = true;
    
        // Weighted selection based on desired probabilities
        var stopAngle;
        if (Math.random() < 0.9) { // 90% chance to win
            stopAngle = winningAngles[Math.floor(Math.random() * winningAngles.length)];
        } else { // 10% chance to lose
            stopAngle = losingAngles[Math.floor(Math.random() * losingAngles.length)];
        }
    
        var randomSpins = Math.floor(Math.random() * 5) + 5; // Random number of spins between 5 and 10
        var spinTo = currentRotation + (360 * randomSpins) + parseInt(stopAngle); // Random full rotations + stop position
        $("#wheel").css({
            'transform': 'rotate(' + spinTo + 'deg)',
            'transition': 'transform 6s ease-out' // Update the duration here to 6 seconds
        });
        currentRotation = spinTo % 360; // Save current rotation
    
        setTimeout(function() {
            spinning = false;
            var prizeName = prizes[stopAngle];

            console.log(stopAngle);
            
            var resultMessage = (losingAngles.includes(stopAngle.toString())) ? 'Close one! Try again.' : 'Congratulations! You won a ' + prizeName + '!';
            showAlert(resultMessage);
            console.log(resultMessage);
        }, 6000); // Update the timeout to 6 seconds to match the CSS transition
    }
    

    function showAlert(resultMessage) {
        var alertHTML = '<div id="prize-alert">' +
                        '<div class="alert-content">' +
                        '<p>' + resultMessage + '</p>' +
                        '<button id="next-btn">Next</button>' +
                        '</div>' +
                        '</div>';
        $("body").append(alertHTML);

        // Bind click event to next button
        $("#next-btn").on('click', function() {
            $("#prize-alert").remove();

            if(resultMessage == "Congratulations! You won a Starbucks card!"){
                showSection('.dataCapture');
            } else{
                showSection('.educationPortal');
            }
        });
    }

    // Trigger passive spin
    startPassiveRotation();

    // Trigger active spin
    $("#wheel, #centercap, #arrow").on('click', function() {
        if (!spinning) {
            spinWheel();
        }
    });
});




/* 
Positions:
180 = Play Again
315 = Play Again
90 = Starbucks card
45 = Play again
225 = Starbucks card
135 = starbucks card
0 = starbucks card
*/