/* Day 11 Lecture Note Scripts
 * Geekwise - JavaScript I
 * Corey Shuman
 * 11/14/15
 */
 
 var myCounter = 0; // global counter
 var myArray = []; // 
 
document.getElementById("myButton").addEventListener("click", function (evt) {
    myCounter ++;
	myArray.push(myCounter);
	printList();
});

function printList() {
	var myList = document.getElementById("myList");
	myList.innerHTML = "";
	for(var i = 0; i < myArray.length; i++)
	{
		var item = myArray[i];
		var newItem = document.createElement("li");
		newItem.textContent = item;
		myList.appendChild(newItem);
	}
}

document.getElementById("myList").addEventListener("click", deleteOnClick);

function deleteOnClick(event) {
	console.log(event);
	if(event.target.nodeName.toUpperCase() === "LI") {
		for(var i = 0; i < myArray.length; i++) {
			var item = myArray[i];
			if(item == event.target.innerHTML) {
				myArray.splice(i,1);
				break;
			}
		}
		var myList = document.getElementById("myList");
		myList.removeChild(event.target);
	}
}