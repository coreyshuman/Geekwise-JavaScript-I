/* Corey Shuman
 * JavaScript I - Geekwise
 * 12/02/15
 *
 */
 
var dinoArray = [];

function dinosaur(type, era, food) {
	// create array from data passed in
	var a = [type, era, food];
	return a;
}

function runDino() {
	var dinoCount = 0;
	var response;
	var type;
	var era;
	var food;
	// loop to get dino count from user
	do {
		response = prompt("How many dinosaurs would you like to enter?");
		dinoCount = parseInt(response);
		if(dinoCount === 0 || isNaN(dinoCount)) {
			alert("Please enter a valid number.");
		}
	} while(dinoCount <= 0 || isNaN(dinoCount));
	
	// loop to get dino info from the user
	for(var i = 0; i<dinoCount; i++ ) {
		do {
			response = prompt("What is the type of dinosaur #" + (i+1) + "?");
			if(response === "") {
				alert("Response cannot be blank.");
			}
		} while(response === "");
		type = response;
		do {
			response = prompt("What is the era of dinosaur #" + (i+1) + "?");
			if(response === "") {
				alert("Response cannot be blank.");
			}
		} while(response === "");
		era = response;
		do {
			response = prompt("What is the food of dinosaur #" + (i+1) + "?");
			if(response === "") {
				alert("Response cannot be blank.");
			}
		} while(response === "");
		food = response;
		
		// now we have all information, call our function and save to array
		var dinoResult = dinosaur(type, era, food);
		dinoArray.push(dinoResult);
	}
	
	// now loop to write dino array info to the page
	var dinoDiv = document.getElementById("myDinoDiv");
	var outputStr = "";
	for(var i = 0; i< dinoArray.length; i++) {
		var dinoData = dinoArray[i];
		outputStr += "<p>";
		outputStr += (i+1) + ") ";
		outputStr += dinoData[0] + " ";
		outputStr += dinoData[1] + " ";
		outputStr += dinoData[2] + " ";
		outputStr += "</p>";
	}
	// push our string to the div
	dinoDiv.innerHTML = outputStr;
}

// run the process
runDino();