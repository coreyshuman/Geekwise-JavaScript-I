// Day 7 - timer project
// Corey Shuman
// 2/1/16

(function() {
	// create elements
	var holder = document.createElement("div");
	var button = document.createElement("button");
	var input = document.createElement("input");
	
	// add text to elements
	button.innerHTML = "start";
	input.placeholder = "set timer (minutes)";
	
	// assign id, append elements to page (body)
	input.setAttribute("id", "input");
	document.body.appendChild(button);
	document.body.appendChild(input);
	document.body.appendChild(holder);
	
	var interval;
	
	// listen for click event then run timer
	button.addEventListener("click", function(){
		//clear previous timer
		clearInterval(interval);
		// get user input (minutes)
		var value = document.getElementById("input").value;
		document.getElementById("input").value = "";
		
		// check if user input was blank
		// if not, run timer
		if(value != "" && parseInt(value) > 0 ) {
			holder.innerHTML = "";
			var count = value * 60;
			//start timer, create values, show them, decrease counter
			interval = setInterval(function(){
				// calculate seconds, minutes,hours
				var seconds = count % 60;
				var minutes = count / 60;
				var hours = (count/60) / 60;
				
				// don't let minutes be greater than 60 (1 hr)
				if(minutes >= 60) {
					minutes = minutes % 60;
				}
				
				// print time to holder
				holder.innerHTML = Math.floor(hours) + "<br>hours<br>" +
					Math.floor(minutes) + "<br>minutes<br>" +
					seconds + "<br>seconds<br>";
					
				count --;
				
				// when timer hits zero
				if(count == 0) {
					holder.innerHTML = "DONE";
					clearInterval(interval);
				}
			}, 1000);
		} else {
			holder.innerHTML = "";
		}
	});
	
	
	
	
	
})();

