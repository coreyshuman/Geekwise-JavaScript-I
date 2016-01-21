/* JavaScript Test Code Template
   Corey Shuman
   11/4/15
   
   This files contains some shortcut functions
   to manipulate the values for two input textboxes.
   It also sets up an event handler to handle
   button clicks on the page.
*/

// USER CODE - Put your code here!
// create todoArray in the global scope (everyone can access it!)
var todoArray = [];

function addItem1ToList()
{
	if(domInput1() != "") {
		todoArray.push(domInput1());
	}
}

function printListToTextOutput()
{
	// this option is fine
	// domTextOutput(todoArray.toString());
	// this adds a space after commas for cleaner output
	domTextOutput(todoArray.join(", "));
}

function addItem2ToBeginningOfList()
{
	// Option 1: use unshift() function
	
	if(domInput2() != "") {
		todoArray.unshift(domInput2());
	}
	
	
	// Option 2: use concat() function and temporary array
	/*
	if(domInput2() != "") {
		var tempArray = [];
		// input 2 content is our only element in tempArray
		tempArray.push(domInput2());
		// now concat our original array to the END of tempArray
		// and save back into original array
		todoArray = tempArray.concat(todoArray);
	}
	*/
	
	// Option 3: use JavaScript spread operator (...) to use array as function arguments
	// NOTE will only work with ES6 (2015 version of ECMAScript)
	/*
	if(domInput2() != "") {
		var tempArray = [];
		tempArray.push(domInput2());
		tempArray.splice(1,0, ...todoArray);
		todoArray = tempArray;
	}
	*/
	
	// Option 4: use JavaScript apply function to use array as function arguments
	// (now we're just getting silly)
	/*
	if(domInput2() != "") {
		var tempArray = [];
		tempArray.push(domInput2());
		tempArray.splice.apply(tempArray, [1,0].concat(todoArray));
		todoArray = tempArray;
	}
	*/
}


// This function is called every time the button is clicked
function handleGoButtonClick(event) {
	// do events here
	// push input 1 text to list
	addItem1ToList();
	// clear contents of input 1
	domInput1("");
	
	// *** BONUS ***
	// call function to add input 2 to beginning of list
	addItem2ToBeginningOfList();
	// clear contents of input 2
	domInput2("");
	// *** END BONUS ***
	
	// call function to print list to Text Output
	printListToTextOutput();
}



// HELPER FUNCTIONS - The following code is helper functions to get you started

// This function sets and returns the value of Input 1
function domInput1(newval) {
	var input1Reference = document.getElementById("input1Id");
	if(newval !== undefined) {
		input1Reference.value = newval;
	}
	return input1Reference.value;
}

// This function sets and returns the value of Input 2
function domInput2(newval) {
	var input2Reference = document.getElementById("input2Id");
	if(newval !== undefined) {
		input2Reference.value = newval;
	}
	return input2Reference.value;
}

// This function sets and returns the value of Input 2
function domTextOutput(newval) {
	var textOutputReference = document.getElementById("textOutputId");
	if(newval !== undefined) {
		textOutputReference.innerHTML = newval;
	}
}

/* This is an Immediately Invoked Function Expression (IIFE)
   The code here runs immediately after the page loads.
   In this case, we are setting up an event handler for
   button presses.
*/
(function() {
	document.getElementById("goBtnId").onclick = handleGoButtonClick;
}());