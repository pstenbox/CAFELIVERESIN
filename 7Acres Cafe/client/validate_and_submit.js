var global_pin_code;

$(document).ready(function() {
    $('.age_gate_submit_btn').on('click', function(e) {
        e.preventDefault(); // Prevents form submission

        let allFieldsFilled = true;
        $('.store_details_form input[type="text"].ageGateForms').each(function() {
            if ($(this).val().trim() === '') {
                allFieldsFilled = false;
                $(this).css('background-color', 'red');
            }
        });

        const pinCode = $('#store_pincode').val().trim();

        if (!allFieldsFilled) {
            alert('Please fill in all fields.');
        } else {
            // AJAX request to server to check PIN code
            $.ajax({
                url: './server/check_pin.php',
                type: 'POST',
                data: { pinCode: pinCode },
                dataType: 'json', // This tells jQuery to expect JSON in response
                success: function(response) {
                    if (response.isValid) {
                        showSection('.educationPortal'); // Proceed to the next section
                        global_pin_code = pinCode;

                        console.log(global_pin_code);
                    } else {
                        $('#store_pincode').css('background-color', 'red');
                        alert(response.error || 'Incorrect PIN Code.');
                        console.log(response);
                    }
                },
                error: function(xhr, status, error) {
                    // Handle any other errors that might occur
                    console.log("Error: " + error);
                    console.log("Status: " + status);
                    console.dir(xhr);
                    alert("An error occurred. Please try again.");
                }
            });
            
        }
    });
});
