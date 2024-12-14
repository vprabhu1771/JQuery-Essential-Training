$(document).ready(function(){

    console.log("Document Ready");

    fetchData();
    
});

function fetchData()
{
    // Replace this URL with your API endpoint or data source
    const apiUrl = 'https://example.com/api/options';

    // Fetch data and populate select menu
    $.ajax({
        url: apiUrl,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Assuming `data` is an array of objects with `id` and `name` properties
            data.forEach(function(item) {
                $('#mySelect').append(
                    $('<option>', {
                        value: item.id, // Option value
                        text: item.name // Option display text
                    })
                );
            });
        },
        error: function(xhr, status, error) {
            console.error('Failed to fetch options:', error);
        }
    });
}