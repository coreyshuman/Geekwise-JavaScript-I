// JSI Day 3
// Corey Shuman

/*
	Prompt for a number value
	Prompt for a second number value
	Convert the prompted values into integers
	Add the numbers together
	Alert the result
*/

var number1 = prompt("Please enter a number");
var number2 = prompt("Please enter a second number");

if(!isNaN(number1) && !isNaN(number2)) {
	number1 = parseInt(number1);
	number2 = parseInt(number2);

	var result = number1 + number2;
	alert(result);
} else {
	alert("Invalid input");
}

