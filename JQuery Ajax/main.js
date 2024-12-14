$(document).ready(function(){

    console.log("Document Ready");

    fetchData();
    
});

function fetchData()
{
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos', // Replace with your URL
        type: 'GET', // Request method
        dataType: 'json' // Expected data format
    })
    .done(function(response) {
        console.log('Response:', response); // Logs the response
    })
    .fail(function(xhr, status, error) {
        console.error('Error:', error); // Logs any errors
    });
}