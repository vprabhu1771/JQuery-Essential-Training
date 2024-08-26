$('.payment_input').on('input', function(){

    var price = $('#price').val();

    var tax = $('#tax').val();

    price = parseInt(price);

    tax = parseFloat(tax);

    // console.log(price);

    // console.log(tax);

    // console.log(price*tax);

    if (Number.isNaN(price)) 
    {
        price = 0;    
    }
    else if(Number.isNaN(tax)) 
    {
        tax = 0
    }

    $('#result1').val(price*tax);

    $('#result2').text(price*tax);

});