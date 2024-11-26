The `val()` function is used to set or get the value of form inputs like `<input>` or `<textarea>`, not for setting text in elements like `<p>` tags. For non-input elements such as `<p>`, you should use the `text()` or `html()` method in jQuery.

Here's the correct code:

```javascript
$('#variant_price').text('Price 200');
```

Or, if you want to include HTML content, you can use:

```javascript
$('#variant_price').html('Price <strong>200</strong>');
```

This will update the content of the `<p>` tag with the desired text.