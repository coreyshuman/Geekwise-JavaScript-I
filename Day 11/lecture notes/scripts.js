/* Day 11 Lecture Note Scripts
 * Geekwise - JavaScript I
 * Corey Shuman
 * 11/14/15
 */
 
document.getElementById("myul").addEventListener("click", function (evt) {
    console.log(this);
    console.log(evt.target);
	alert(evt.target.textContent);
});



// create our cup object using dot notation
var myCup = new Object();
myCup.color = "black";
myCup.type = "mug";
myCup.status = "full";
myCup.content = "coffee";
myCup.clean = false;

// alternate method using braket notation
var myCup2 = {};
myCup2["color"] = "black";
myCup2["type"] = "mug";
myCup2["status"] = "full";
myCup2["content"] = "coffee";

// another way to create an object as name:value pairs
var myCup3 = {color: "black", type: "mug", status: "full", content: "coffee"};

// add a pour method to the cup Object
myCup.pour = function pour() {
	if(this.status === "full") {
		this.status = "half-full";
	} else {
		this.status = "empty";
		this.content = "none";
	}
	return this.status;
}

myCup.wash = function() {
	this.clean = true;
	this.status = "empty";
	this.content = "none";
}

myCup.fill = function(drinkType) {
	if(drinkType === "") {
		drinkType = "water";
	}
	this.clean = false;
	this.status =  "full";
	this.content = drinkType;
}



var todoItem = {};
todoItem.text = "User inputs something here";
todoItem.finished = false;


var arr = [myCup, myCup2, myCup3];
	arr.forEach(function (item) {
	item.clean = false;
	console.log(item);
});

var str = ["c", "f", "a", "b", "d"];
str.sort(function (a, b) {
	return b.charCodeAt(0) - a.charCodeAt(0);
});

