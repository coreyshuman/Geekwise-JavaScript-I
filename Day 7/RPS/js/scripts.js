/* JavaScript Test Code Template
   Corey Shuman
   11/4/15
   
   This files contains some shortcut functions
   to manipulate the values for two input textboxes.
   It also sets up an event handler to handle
   button clicks on the page.
*/

// USER CODE - Put your code here!
var gameCount = 0;
var winCount = 0;

// This function is called every time the button is clicked
function handleGoButtonClick(event) {
	var user = domInput1().toLowerCase();
	var computer;
	var result;
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

	domInput1("");
	if(user !== 'rock' && user !== 'paper' && user !== 'scissors') {
		result = "Invalid Input";
		domTextOutput(result);
		return;
	}
	
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