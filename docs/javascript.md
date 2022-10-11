## Javascript

JavaScript ("JS" for short) is a full-fledged dynamic programming language.

#### alert()

- `window.alert()` instructs the browser to display a dialog with an optional message, and to wait until the user dismisses the dialog.

- ```
  window.alert("Hello");
  ```

#### typeof()

- **`typeof`** operator returns a string indicating the type of the unevaluated operand.

- ```
  typeof("text");
  ```

#### prompt()

- `window.prompt()` instructs the browser to display a dialog with an optional message prompting the user to input some text.

- ```
  window.prompt("What is your age");
  ```

#### Variables

- Used to store data

- ```
  var myName="Tom";
  ```

- ```
  # Exercise
  alert(typeof(myName));
  
  var myName=prompt("What is your name?");
  window.alert(nyName);
  ```

#### String Concatenation

- Add two strings together

- ```
  var name = "Henry"; 
  var lastName = " Ford";
  alert(name + lastName);
  ```

#### Word Length

- Returns the length of the string

- ```
  lastName.length
  ```

- ```
  var tweet = prompt("Compose your tweet");
  var tweetCount = tweet.length;
  
  window.alert("You have written " + tweet.length + " you have " + (140-tweetCount) + " charecters left.")
  ```

#### toUpperCase() & toLowerCase()

- Convert it into uppercase

- ```
  word.UpperCase();
  ```

- ```
  var name = prompt("What is your name?");var firstChar = name.slice(0,1);var upperCaseFirstChar = firstChar.toUpperCase();var restOfName = name.slice(1,name.length);
  ```

- word.UpperCase();

#### slice()

- **`slice()`** method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (`end` not included)

- ```
  word.slice(1,3);
  ```

- ```
  var tweet = prompt("Compose your tweet");
  var tweetUnder140 = tweet.slice(0:140);
  alert(tweetUnder140);
  
  alert(prompt("Compose your tweet: ").slice(0, 140));
  ```

#### Inner HTML in JavaScript

To retrieve elements properties.

```javascript
<!DOCTYPE html>
<html>
<body>
<p id="paragraph1" onclick="myFunction()">Click here to change the innerHTML text.</p>
<script>
function myFunction() {
document.getElementById("paragraph1").innerHTML = "Paragraph changed!";
}
</script>
</body>
</html>
```



