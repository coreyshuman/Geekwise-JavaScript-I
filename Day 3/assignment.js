
var todo = prompt("What would you like to do?");

if( (todo == null) || (todo == "") )
{
	alert("You must type something!");
}
else
{
	alert(todo);
	console.log(todo);
}