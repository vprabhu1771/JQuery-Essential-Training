Here is a list of commonly used jQuery utility functions that start with `$`:

1. **`$.map()`**  
   - Transforms an array or object into a new array of values.
   - Example:
     ```javascript
     const numbers = [1, 2, 3];
     const doubled = $.map(numbers, function(value) {
       return value * 2;
     });
     console.log(doubled); // [2, 4, 6]
     ```

2. **`$.each()`**  
   - Iterates over an array or object.
   - Example:
     ```javascript
     $.each([1, 2, 3], function(index, value) {
       console.log(index, value);
     });
     ```

3. **`$.ajax()`**  
   - Performs an asynchronous HTTP request.
   - Example:
     ```javascript
     $.ajax({
       url: '/api/data',
       method: 'GET',
       success: function(response) {
         console.log(response);
       }
     });
     ```

4. **`$.extend()`**  
   - Merges the contents of two or more objects.
   - Example:
     ```javascript
     const obj1 = { a: 1 };
     const obj2 = { b: 2 };
     const result = $.extend(obj1, obj2);
     console.log(result); // { a: 1, b: 2 }
     ```

5. **`$.grep()`**  
   - Filters an array based on a condition.
   - Example:
     ```javascript
     const numbers = [1, 2, 3, 4, 5];
     const evens = $.grep(numbers, function(value) {
       return value % 2 === 0;
     });
     console.log(evens); // [2, 4]
     ```

6. **`$.inArray()`**  
   - Checks if a value exists in an array and returns its index.
   - Example:
     ```javascript
     const arr = ['a', 'b', 'c'];
     console.log($.inArray('b', arr)); // 1
     ```

7. **`$.isArray()`**  
   - Checks if the given argument is an array.
   - Example:
     ```javascript
     console.log($.isArray([1, 2, 3])); // true
     console.log($.isArray({})); // false
     ```

8. **`$.isFunction()`**  
   - Checks if the given argument is a function.
   - Example:
     ```javascript
     console.log($.isFunction(function() {})); // true
     ```

9. **`$.isEmptyObject()`**  
   - Checks if an object is empty.
   - Example:
     ```javascript
     console.log($.isEmptyObject({})); // true
     console.log($.isEmptyObject({ key: 'value' })); // false
     ```

10. **`$.parseJSON()`**  
    - Parses a JSON string into an object.
    - Example:
      ```javascript
      const jsonString = '{"key": "value"}';
      const obj = $.parseJSON(jsonString);
      console.log(obj); // { key: 'value' }
      ```

11. **`$.trim()`**  
    - Removes whitespace from the beginning and end of a string.
    - Example:
      ```javascript
      const str = '  hello  ';
      console.log($.trim(str)); // 'hello'
      ```

12. **`$.proxy()`**  
    - Changes the context (`this`) of a function.
    - Example:
      ```javascript
      const obj = {
        name: 'jQuery',
        greet: function() {
          console.log(this.name);
        }
      };
      const greet = $.proxy(obj.greet, obj);
      greet(); // 'jQuery'
      ```

Let me know if you need examples or detailed explanations for any of these functions!