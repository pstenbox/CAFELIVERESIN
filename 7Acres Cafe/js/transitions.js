$(document).ready(function() {
    let isAgeVerified = false;

    // Clear red background upon correction
    $('.input_field_default').on('input', function() {
        $(this).css('background-color', '');
    });

    $('#yesButton, #noButton').on('click', function(e) {
        e.preventDefault(); // Prevents page reload
        isAgeVerified = $(this).attr('id') === 'yesButton';
        $(this).addClass('button_selected').siblings().removeClass('button_selected');
        if (!isAgeVerified) {
            alert('You must be 19 or older to enter.');
        }
    });

    // $('.age_gate_submit_btn').on('click', function(e) {
    //     e.preventDefault(); // Prevents form submission

    //     // Check if all fields are filled
    //     let allFieldsFilled = true;
    //     $('.store_details_form input[type="text"].ageGateForms').each(function() {
    //         if ($(this).val().trim() === '') {
    //             allFieldsFilled = false;
    //             $(this).css('background-color', 'red');
    //         }
    //     });
        
    //     const pinCode = $('#store_pincode').val().trim();
    //     const correctPinCode = "123";

    //     // Separate condition checks
    //     if (!isAgeVerified) {
    //         alert('Please verify your age.');
    //     } else if (!allFieldsFilled) {
    //         alert('Please fill in all fields.');
    //     } else if (pinCode !== correctPinCode) {
    //         $('#store_pincode').css('background-color', 'red');
    //         alert('Incorrect PIN Code.');
    //     } else {
    //         // If all validations pass
    //         // $('.age_gate_submit_btn').on('click', function() {
    //         // });
    //         showSection('.educationPortal');
    //     }
    // });
});

/* Tooltip */
$('.tooltipSelector').click(function(){
    $('.tooltipGuide').show().css("display","flex");
})
$('.close_tool_tip').click(function(){
    $('.tooltipGuide').hide();
})