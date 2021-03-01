var num1 = prompt("Enter a number")
var num2 = prompt("Enter another number")
var operator = prompt("Choose an operator +, -, *, /")
var final = num1+operator+num2
document.body.querySelector(".message").innerHTML="the answer is " + final