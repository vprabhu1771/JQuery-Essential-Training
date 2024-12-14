$(document).ready(function(){

    console.log("Document Ready");

    fetchData();
    
});

function fetchData()
{
    const options = [
        { id: 1, name: "Option 1" },
        { id: 2, name: "Option 2" },
        { id: 3, name: "Option 3" }
    ];

    options.forEach(function (option) {
        $('#mySelect').append(
            $('<option>', {
                value: option.id,
                text: option.name
            })
        );
    });
}