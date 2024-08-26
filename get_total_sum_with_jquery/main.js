$('.price').mask('#, ###.##', {
    reverse: true
});

var total_amount = function() {
    var sum = 0;

    $('.price').each(function(){
        
        var num = $(this).val().replace(',', '');

        if (num !== 0) 
        {
            sum += parseFloat(num);    
        }
        // console.log($(this));
    });

    // console.log(sum);

    $('#result1').val(sum);

    $('#result2').text(sum);
}

$('.price').keyup(function(){
    total_amount();
})