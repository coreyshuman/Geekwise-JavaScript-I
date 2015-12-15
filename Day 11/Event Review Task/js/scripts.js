/* Day 11 Lecture Note Scripts
 * Geekwise - JavaScript I
 * Corey Shuman
 * 11/14/15
 */
 
 var myCounter = 0; // global counter
 
document.getElementById("myButton").addEventListener("click", function (evt) {
    myCounter ++;
	var myList = document.getElementById("myList");
	var newItem = document.createElement("li");
	newItem.textContent = myCounter;
	//newItem.addEventListener("click", deleteOnClick);
	myList.appendChild(newItem);
});

document.getElementById("myList").addEventListener("click", deleteOnClick);

function deleteOnClick(event) {
	console.log(event)
	console.log(this)
	if(event.target.nodeName.toUpperCase() === "LI") {
		var myList = document.getElementById("myList");
		myList.removeChild(event.target);
	}
}