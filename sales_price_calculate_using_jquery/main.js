$( document ).ready(function() {
    // console.log( "ready!" );
    var purchase_price =parseFloat(0);

    $("#purchase_price").val(purchase_price.toFixed(2));

    var sales_price =parseFloat(0);
    
    $("#sales_price").val(purchase_price.toFixed(2));

    $("#price").keyup(function(event) {
        calculate_purchase_price();
    });

    $("#profit_margin").keyup(function(event) {
        calculate_sales_price();
    });

    //CALCULATED PURCHASE PRICE
    function calculate_purchase_price(){
        
        var price = ( isNaN( parseFloat( $("#price").val().trim() ) ) ) ? 0 : parseFloat( $("#price").val().trim() ); 

        var purchase_price = price;

        $("#purchase_price").val(purchase_price.toFixed(2));
        
        console.log(price);
    }

    //CALCUALATED SALES PRICE
    function calculate_sales_price(){
        
        var purchase_price = ( isNaN( parseFloat( $("#purchase_price").val().trim() ) ) ) ? 0 : parseFloat( $("#purchase_price").val().trim() ); 
	    
        var profit_margin = ( isNaN( parseFloat( $("#profit_margin").val().trim() ) ) ) ? 0 : parseFloat( $("#profit_margin").val().trim() ); 

        var sales_price =parseFloat(0);

        if(purchase_price > 0)
        {
        
            if(tax_type=='Inclusive')
            {
                sales_price = purchase_price + ( (purchase_price*profit_margin) / parseFloat(100) );
            }
            else{
                sales_price = purchase_price + ( (purchase_price*profit_margin) / parseFloat(100) );
            }	
        }
        else{
            sales_price = profit_margin;
        }

        $("#sales_price").val(sales_price.toFixed(2));

    }
});