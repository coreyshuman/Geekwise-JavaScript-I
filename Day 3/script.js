var response = prompt("Enter 1, 2, or 3.");
var responseInt = parseInt(response);

if(isNaN(responseInt))
{
	alert("That's not a number!");
}
else
{
	switch (responseInt) {
		default:
			alert("No proper response!");
			break;
		case 1:
			alert("You entered '1'");
			break;
		case 2:
			alert("You entered '2'");
			break;
		case 3:
			alert("You entered '3'");
			break;
		
	}
}




/*
if (character == "A") {
   alert("You entered 'A'");
}
else if (character == "B") {
   alert("You entered 'B'");
}
else if (character == "C"){
	alert("You entered 'C'");
}
else {
	alert("Not a valid entry.");
}
*/



/*
if( (a < b) && (c || d) ) {
	console.log("this is true");
} else {
	console.log("this is false");
}
*/