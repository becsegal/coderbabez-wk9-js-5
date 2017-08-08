# CoderBabez

##  Week Eight - If/Else Statements, Comparison Operators, & Logical Operators

### Objectives
Use if/else statements with comparison and logical operators to branch your code.

### Vocab
* If/else statements
* Comparison operators
* Logical operators

### If/else statements

Use if/else statements to branch code depending on state.

```js
if (/* condition */) {
  // do something if condition is true
} 
else {
  // otherwise, do something else
}
```

You can keep going
```js
if (/* condition 1 */) {
  // do thing 1
}
else if (/* condition 2 */) {
 // do thing 2 if condition 2 is true
} 
else if (/* condition 3 */) {
  // do thing 3 if condition 3 is true
}
// ... and so on
else {
  // do a default thing
}
```
Only ONE of the above statements will execute. If condition 1 is true, it will do action 1 and then break out of the if/else statement. So if condition 3 is also true, we won't do thing 3. 

You actually don't even need an else
```js
if (/* this is true */) {
  // do something 
}
// and carry on
```

Example: 
```js
if (temperature > 80) {
  console.log("too hot");
}
else if (temperature < 50) {
  console.log("too cold");
}
else {
  console.log("just right");
}
```

### Comparison operators

What is truth?

How do we identify the truth?

We have comparison operators!

Like strings and numbers, there's a data type called a boolean that is either true or false. The result of comparison operators is either true or false

Give that `x = 5` ...

<table>
<tbody>
<tr>
<th>Operator</th>
<th>Description</th>
<th>Comparing</th>
<th>Returns</th>
</tr>
<tr style="background-color:#f5f5f5;">
<td rowspan="3">==</td>
<td rowspan="3">equal to</td>
<td>x == 8</td>
<td>false</td>
<tr style="background-color:#f5f5f5;">
<td>x == 5</td>
<td>true</td>
<tr style="background-color:#f5f5f5;">
<td>x == "5"</td>
<td>true</td>
<tr style="background-color:#ffffff;">
<td rowspan="2">===</td>
<td rowspan="2">equal value and equal type</td>
<td>x === 5</td>
<td>true</td>
<tr style="background-color:#ffffff;">
<td>x === "5"</td>
<td>false</td>
<tr style="background-color:#f5f5f5;">
<td>!=</td>
<td>not equal</td>
<td>x != 8</td>
<td>true</td>
<tr style="background-color:#fff;">
<td rowspan="3">!==</td>
<td rowspan="3">not equal value or not equal type</td>
<td>x !== 5</td>
<td>false</td>
<tr style="background-color:#fff">
<td>x !== "5"</td>
<td>true</td>
<tr style="background-color:#fff">
<td>x !== 8</td>
<td>true</td>
<tr style="background-color:#f5f5f5">
<td>&gt;</td>
<td>greater than</td>
<td>x &gt; 8</td>
<td>false</td>
<tr style="background-color:#ffffff;">
<td>&lt;</td>
<td>less than</td>
<td>x &lt; 8</td>
<td>true</td>
<tr style="background-color:#f5f5f5;">
<td>&gt;=</td>
<td>greater than or equal to</td>
<td>x &gt;= 8</td>
<td>false</td>
<tr style="background-color:#ffffff;">
<td>&lt;=</td>
<td>less than or equal to</td>
<td>x &lt;= 8</td>
<td>true</td>
</tbody></table>


### Logical operators

Remember that only the first match in an if/if else/else block executes. What if you want to do something if multiple things are true?

Logical operators!

Logical operators combine true/false statements so you can combine comparison operators.

Give that `x = 6` and `y = 3` ...
<table>
<tbody><tr>
<th>Operator</th>
<th>Description</th>
<th>Example</th>
</tr>
<tr>
<td>&amp;&amp;</td>
<td>and</td>
<td> (x &lt; 10 &amp;&amp; y &gt; 1) is true</td>
</tr>
<tr>
<td>||</td>
<td>or</td>
<td>(x == 5 || y == 5) is false</td>
</tr>
<tr>
<td>!</td>
<td>not</td>
<td> !(x == y) is true</td>
</tr>
</tbody></table>


### Project helper

In a click handler, there's a special object you get that is obnoxiously called `this`. `this` refers to the object that is clicked. You can use it to get information about the object that was clicked.

If you have multiple buttons, you can get the value on the button like so:

```html
<button>Button 1</button>
<button>Button 2</button>
```

```js
$('button').click(function() {
  console.log($(this).html());
}
```

Or you could get attributes from the tag
```html
<button data-custom='dog'>Button 1</button>
<button data-custom='cat'>Button 2</button>
```

```js
$('button').click(function() {
  console.log($(this).attr('data-custom'));
}
```

### Project

Rock, paper, scissors! The user picks rock, paper, or scissors. Compare that to the computer's choice and show who wins.

Take a look at the live site:

* What are the html elements?
* How can you tell which button was clicked?
* How do you know who wins?
* What operators do you need?


# Reference:

* https://www.w3schools.com/js/js_if_else.asp
* https://www.w3schools.com/js/js_comparisons.asp
* https://api.jquery.com/click/
