/* JS1 - Day 5
 * Function Review Task
 * Corey Shuman
 * 11/16/15
 */

 // define our function here
 function todoPrompt() {
	var todo = prompt("What would you like to do?");

	if( (todo == null) || (todo == "") )
	{
		alert("You must type something!");
		todoPrompt(); // Calling a function inside itself is called "recursion"
	}
	else
	{
		alert(todo);
		console.log(todo);
	}
	
	// I added this line below so we can see how many times the function was called
	console.log("Exiting todoPrompt()");
}

// One way to trigger a function is to call it directly in the file.
// This is not always the best way to do it. We will look at other 
// ways later on.
todoPrompt();