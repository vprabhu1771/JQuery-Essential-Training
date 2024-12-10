Here’s an example of how to use the `$.map()` function in jQuery. The `$.map()` method is used to iterate over an array or object and returns a new array after applying a function to each element.

### Example: Mapping an Array

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>jQuery Map Example</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
  <h1>jQuery Map Example</h1>
  <p>Check the console for output.</p>
  <script>
    $(document).ready(function () {
      // Original array
      var numbers = [1, 2, 3, 4, 5];

      // Using $.map() to double the numbers
      var doubled = $.map(numbers, function (value, index) {
        return value * 2;
      });

      console.log("Original array:", numbers);
      console.log("Doubled array:", doubled);
    });
  </script>
</body>
</html>
```

### Output in Console:
```
Original array: [1, 2, 3, 4, 5]
Doubled array: [2, 4, 6, 8, 10]
```

### Example: Mapping an Object

```html
<script>
  $(document).ready(function () {
    // Original object
    var people = {
      0: { name: "Alice", age: 25 },
      1: { name: "Bob", age: 30 },
      2: { name: "Charlie", age: 35 }
    };

    // Using $.map() to extract names
    var names = $.map(people, function (person, index) {
      return person.name;
    });

    console.log("Names:", names);
  });
</script>
```

### Output in Console:
```
Names: ["Alice", "Bob", "Charlie"]
```

This demonstrates how `$.map()` can be used with both arrays and objects to create new transformed arrays.