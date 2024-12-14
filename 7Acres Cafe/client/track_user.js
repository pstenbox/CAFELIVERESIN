$(document).ready(function() {
    // Function to detect device type based on screen width
    function getDeviceType() {
        const width = $(window).width();
        if (width < 768) {
            return 'Mobile';
        } else if (width >= 768 && width < 992) {
            return 'Tablet';
        } else {
            return 'Desktop';
        }
    }

    // Collect user data
    const userData = {
        ip_address: '',  // This will be set server-side if not available via JS
        device_info: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        operating_system: navigator.platform,
        browser_language: navigator.language || navigator.userLanguage,
        session_duration: 0, // This will need to be calculated server-side or via further client-side tracking
        interactions: '', // This will need to be tracked via additional event listeners if required
        device_type: getDeviceType(),
        has_visited_before: localStorage.getItem('hasVisited') ? true : false,
        has_been_flagged: false  // Default value, can be changed server-side if needed
    };

    // Track the initial visit
    if (!userData.has_visited_before) {
        localStorage.setItem('hasVisited', 'true');
    }

    // Send data to the server
    $.ajax({
        url: './server/track_user.php',
        type: 'POST',
        data: userData,
        dataType: 'json',
        success: function(response) {
            console.log('User data tracked successfully:', response);
        },
        error: function(xhr, status, error) {
            console.error('Failed to track user data:', xhr.responseText);
        }
    });
});
