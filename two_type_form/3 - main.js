$(document).ready(function(){

    // $('[name="atm"]')

    $('[name="atm"][value="atm"]').prop('checked', true).change();

    $('#result').text('I Have ATM CARD');
    
    $('form[name="pan_form"]').hide();

    $('[name="atm"]').click(function() {

        if ($(this).val() == "atm") {
            
            $('form[name="pan_form"]').hide();
            
            $('form[name="atm_form"]').show();
            
            $('#result').text('I Have ATM CARD');

            console.log($(this).val());
        }

        if ($(this).val() == "no_atm") {

            $('form[name="atm_form"]').hide();
            
            $('form[name="pan_form"]').show();

            $('#result').text('I Dont have ATM CARD');

            console.log($(this).val());
        }
        
    });

    
        
    

});