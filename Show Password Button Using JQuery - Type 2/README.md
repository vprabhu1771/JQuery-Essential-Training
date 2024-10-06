To create a show/hide password feature using jQuery, you can toggle the `type` attribute of the password field between `password` and `text`. Here's a simple example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show/Hide Password</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

    <input type="password" id="password" placeholder="Enter Password">
    <button id="togglePassword">Show</button>

    <script>
        $(document).ready(function() {
            $('#togglePassword').on('click', function() {
                const passwordField = $('#password');
                const type = passwordField.attr('type') === 'password' ? 'text' : 'password';
                passwordField.attr('type', type);

                // Change button text based on the current state
                $(this).text(type === 'password' ? 'Show' : 'Hide');
            });
        });
    </script>

</body>
</html>
```

This code uses jQuery to toggle the password input field between 'text' (show password) and 'password' (hide password) when the button is clicked. The button text also updates accordingly.