/* JavaScript Rock Paper Scissors Game
   Corey Shuman
   3/14/16
   
*/

// create global variables to store game and win count
var gameCount = 0;
var winCount = 0;

// This function is called every time the button is clicked
function handleGoButtonClick(event) {
	// get user value that they typed into input 1
	var user = domInput1().toLowerCase();
	var computer;
	var result;
	// use a random number to pick what the computer plays
	switch(Math.ceil(Math.random()*3)) {
		case 1:
			computer = 'rock';
			break;
		case 2:
			computer = 'paper';
			break;
		case 3:
			computer = 'scissors';
			break;
	}

	// clear the input box
	domInput1("");
	// validate the user input
	if(user !== 'rock' && user !== 'paper' && user !== 'scissors') {
		result = "Invalid Input";
		domTextOutput(result);
		return;
	}
	
	// game logic
	// string stored in 'result' will be sent to page
	result = "You choose " + user;
	result += "<br>Computer chooses " + computer + "<br>";
	gameCount++;
	if(user == computer) {
		result += "It's a tie!";
	} else if(user == 'rock' && computer == 'scissors') {
		result += "Rock smashes scissors. You Win!";
		winCount ++;
	} else if(user == 'rock' && computer == 'paper') {
		result += "Paper covers rock. You Lose!";
	} else if(user == 'paper' && computer == 'rock') {
		result += "Paper covers rock. You Win!";
		winCount ++;
	} else if(user == 'paper' && computer == 'scissors') {
		result += "Scissors cuts paper. You Lose!";
	} else if(user == 'scissors' && computer == 'rock') {
		result += "Rock smashes scissors. You Lose!";
	} else if(user == 'scissors' && computer == 'paper') {
		result += "Scissors cuts paper. You Win!";
		winCount ++;
	}
	
	result += "<br> You have played " + gameCount + " games.";
	result += "<br> You have won " + winCount + " games.";
	// output text to the page
	domTextOutput(result);
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