$(document).ready(function(){

  var grandTotal = 0;

  $("[id*=amt").each(function(){

    grandTotal = grandTotal + parseFloat($(this).html());

  });

  $("[id*=grandTotal").html("Total = " + grandTotal.toString());
  

});