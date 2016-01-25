// Task Day 4
// Add and divide numbers from user
// Corey Shuman

var a1 = prompt("What is your first number?");
var a2 = prompt("What is your second number?");

var n1 = parseInt(a1);
var n2 = parseInt(a2);

if (isNaN(n1) || isNaN(n2) ) {
	alert("Invalid input.")
} else {
	var multiply = n1 * n2;
	var divide = n1 / n2;
	alert(a1 + " * " + a2 + " = " + multiply);
	alert(a1 + " / " + a2 + " = " + divide);
}