var global_store_owner_name;
var global_store_name;

$(document).ready(function() {
    $('#provinceSelect').change(function() {
        const selectedProvince = $(this).val();
        $('#store_name').val('');
        $('#store_address').val('');
    });

    // Enabling submit button logic
    $('.store_details_form .input_field_default').on('keyup', function() {
        let allFilled = true;
        $('.store_details_form .input_field_default').each(function() {
            if ($(this).val() === '') {
                allFilled = false;
                return false;
            }
        });
        // $('.age_gate_submit_btn').prop('disabled', !allFilled);
    });

    $('#store_name').on('input', function() {
        const inputValue = $(this).val().toLowerCase();
        const selectedProvince = $('#provinceSelect').val();
        const matchingStores = stores.filter(store => store.province === selectedProvince && store.name.toLowerCase().includes(inputValue));
    
        // Use an object to track unique store names to prevent duplicates in suggestions
        const uniqueStoreNames = {};
    
        // Clear previous suggestions
        $('#storeNameSuggestions').empty().show();
    
        if (matchingStores.length > 0 && inputValue !== '') {
            matchingStores.forEach(function(store) {
                if (!uniqueStoreNames[store.name]) {
                    uniqueStoreNames[store.name] = true;
                    $('#storeNameSuggestions').append(`<p data-owner="${store.owner}">${store.name}</p>`);
                }
            });
    
            // Click on suggestion
            $('#storeNameSuggestions p').on('click', function() {
                const storeName = $(this).text();
                const storeOwner = $(this).data('owner');
                $('#store_name').val(storeName);
                $('#storeNameSuggestions').empty().hide(); // Clear and hide suggestions
                $('#store_address').val(''); // Clear the address field since the store might have multiple addresses
                
                console.log('Store Name:', storeName);
                console.log('Store Owner:', storeOwner);
                global_store_owner_name = storeOwner;
                global_store_name = storeName;
            });
        } else {
            $('#storeNameSuggestions').hide();
        }
    });

    // Logic for hiding store name suggestions when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#store_name').length) {
            $('#storeNameSuggestions').empty().hide();
        }
    });

    $('#store_address').on('input', function() {
        const inputValue = $(this).val().toLowerCase();
        const selectedStore = $('#store_name').val().toLowerCase();
        const selectedProvince = $('#provinceSelect').val();
        const matchingAddresses = stores.filter(store => store.name.toLowerCase() === selectedStore && store.province === selectedProvince && store.address.toLowerCase().includes(inputValue));

        // Clear previous suggestions
        $('#addressSuggestions').empty().show();

        if(matchingAddresses.length > 0 && inputValue !== '') {
            matchingAddresses.forEach(function(store) {
                $('#addressSuggestions').append(`<p>${store.address}</p>`);
            });

            // Click on suggestion
            $('#addressSuggestions p').on('click', function() {
                $('#store_address').val($(this).text());
                $('#addressSuggestions').empty().hide(); // Clear and hide suggestions
            });
        } else {
            $('#addressSuggestions').hide();
        }
    });

    // Hide suggestions when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#store_address').length) {
            $('#addressSuggestions').empty().hide();
        }
    });
});



/* Page redirects */
function showSection(sectionClassName) {
    // Hide all sections
    $('.pageFrame').hide();

    // Show the specified section
    $(sectionClassName).show().css("display","flex");
}

$('.education_portal_submitBtn').on('click', function() {
    showSection('.sellSheet');
});

$('.sellsheet_btn_confirm').on('click', function() {
    showSection('.questionPortal');
});

$('.prize_retry_btn').on('click', function() {
    showSection('.educationPortal');
    $('.yellow_popup').hide();
    $('.overlay').hide();
    $('.questionPortal .frameContent').css("filter","blur(0px)");
    $('.multiple_choice p').each(function(){
        $(this).removeClass("selected_quiz_answer");
    })
});

$('.claim_prize_btn').on('click', function() {
    showSection('.spintowin');
});

// $('.giftcard_submit_btn').on('click', function() {
//     showSection('.thankYou');
// });

$('.how_to_earn_more_btn').on('click', function() {
    showSection('.morePinsGuide');
});

$('.termsConditions').on('click', function() {
    $('.termsPolicy').show();
    $('.termsPolicy').css("position","absolute");
    $('.termsPolicy').css("top","0");
});

$('.privacyPolicyPageURL').on('click', function() {
    $('.privacyPolicyTab').show();
    $('.privacyPolicyTab').css("position","absolute");
    $('.privacyPolicyTab').css("top","0");
})

$('.contestRulesLink').on('click', function() {
    $('.rulesPage').show();
    $('.rulesPage').css("position","absolute");
    $('.rulesPage').css("top","0");
})

