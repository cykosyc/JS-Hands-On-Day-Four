/*
Now that you have more of an understanding of JavaScript we will be using these in this project project to solidify these concepts through hands-on, practical use. Hands-On projects are completed outside of the browser, using your IDE, or editor of choice.

Description:
In this project, we will be building a complex function that will allow us to generate numbers. Our function will need to take the two previous number and add them together to get the next number in our sequence. For Example, 1, 2, 3, 5, 8, 13.

Requirements
An executable function that can print at least 20 numbers in the correct sequence.

Bonus Display the information in the window instead of the console.

Grading
Meets all Requirements: 50% of your grade will be based on meeting the requirements.
Timely Submission: 25% of your grade will be based on having a complete solution on time.
Style: 25% of your grade will be based on having legible, and well-designed code.
*/

function alpha(a) {
  var values = [1, 2]
  for (var i = 0; i < a; i++){
    var lastValue = values[values.length - 1]
    var secondToLastValue = values[values.length - 2]
    values.push(lastValue + secondToLastValue);
  }
  return values
}
console.log(alpha(20));
