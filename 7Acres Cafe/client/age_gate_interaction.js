$(document).ready(function() {
    $('#noButton').click(function() {
        alert('You must be 19 or older to enter this site.');
        console.log(global_store_owner_name);
    });

    $('#submitAgeGate').click(function() {
        var storeName = $('#store_name').val().trim();
        var storeAddress = $('#store_address').val().trim();
        var pinCode = $('#store_pincode').val().trim();
        var province = $('#provinceSelect').val();
        var storeOwner = global_store_owner_name;
    
        // Check if any field is empty
        if (!storeName || !storeAddress || !pinCode || !province) {
            alert('Please fill all the fields.');
            return;
        }
    
        // Continue with AJAX request
        $.ajax({
            url: './server/store_activity_logs.php',
            type: 'POST',
            data: {
                storeName: storeName,
                storeAddress: storeAddress,
                pinCode: pinCode,
                province: province,
                storeOwnerName: storeOwner // Pass the global store owner name
            },
            dataType: 'json',
            success: function(response) {
                if (response.isValid) {
                    // alert('Submission Successful. Welcome!');
                    console.log('Success Store Owner: ' + storeOwner);
                } else {
                    alert(response.error);
                }
            },
            error: function(xhr, status, error) {
                console.log(error);
                alert("Submission Failed. Please try again.");
            }
        });
    });
    
    
});
