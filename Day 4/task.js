var n1 = prompt("Give me your first number.")
var n2 = prompt( "Give me your second number.")

var na1 = parseInt(n1);
var nb2 = parseInt(n2);

if( isNaN(na1) || isNaN(nb2) )
{
	alert("Input not valid!");
}
else
{
	var answermulti = (na1 * nb2);
	alert("The two numbers multiplied by eachother is  " + answermulti);
	var answerdivide = (na1 / nb2);
	alert("The two numbers divided are " + answerdivide);
}