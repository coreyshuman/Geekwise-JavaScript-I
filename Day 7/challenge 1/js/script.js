/* Corey Shuman
 * JavaScript I - Geekwise
 * 11/30/15
 *
 */
 
var myArray = [];

function submitHandler(event) {
	var textbox = document.getElementById("input");
	var table = document.getElementById("table");
	var row = table.insertRow(0);
	var cell = row.insertCell(0);
	
	cell.innerHTML = textbox.value;
	textbox.value = "";
	
}

document.getElementById("button").onclick = submitHandler;