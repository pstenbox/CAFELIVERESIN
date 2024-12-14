var pageMap = {
    '#terms': '.termsPolicy',
    '#privacy': '.privacyPolicy',
    '#rules': '.rulesPage'
};

$(document).ready(function() {
    // Function to show the specified section
    function showSection(section) {
        $('.pageFrame').hide(); // Hide all sections
        $(section).show(); // Show the specified section
    }

    // Check the URL hash when the page loads and show the corresponding section
    var currentHash = window.location.hash;
    if (pageMap[currentHash]) {
        // $('.terms_agree_btn').hide();

            // Event handler for the terms agree button
    $('.terms_agree_btn').on('click', function() {
        // No matter what, when this button is clicked, show the .ageGate section
        showSection('.ageGate');
    });
        // If there is a hash and it is one of the specified ones, show the mapped section
        showSection(pageMap[currentHash]);

        const video = $('#introVideo').get(0);
        video.pause(); // Pause the video
        $('.introAnimation').addClass('hideIntroVideo');
        video.currentTime = 0; // Reset the video to the start
    } else {

        if(skipIntro == false){

                // Event handler for the terms agree button
    $('.terms_agree_btn').on('click', function() {
        // No matter what, when this button is clicked, show the .ageGate section
        // showSection('.ageGate');
        $('.policyPages').hide();
    });
            // If there is no hash, show the intro animation
            showSection('.introAnimation');
                
            // Start the intro video only if we're showing the intro animation
            const videoElement = $('#introVideo')[0]; // Get the raw HTML video element
            videoElement.play();
        }
   
    }



    // Handle the hashchange event
    $(window).on('hashchange', function() {
        var newHash = window.location.hash;
        if (pageMap[newHash]) {
            showSection(pageMap[newHash]);
        }
    });
});



function showSectionFromPath() {
    var path = window.location.pathname;
    var parts = path.split('/');
    var lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash

    if (lastSegment) {
        var className = '.' + lastSegment; // Convert last path segment into a class name
        showSection(className);
    }
}

// $(document).ready(function() {
//     // Decide to show section from hash or path
//     if (window.location.hash) {
//         showSectionFromHash();
//     } else {
//         showSectionFromPath();
//     }
// });

