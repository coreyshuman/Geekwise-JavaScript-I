

function concatStrings() {
	var str = "";
	//console.log(arguments);
	for(var i = 0; i < arguments.length; i++) {
		str += arguments[i] + " ";
	}
	
	console.log(str);
}

concatStrings("hello", "world", "is", "a", "string");

function addNumbers() {
	var sum =  0;
	
	for(var i = 0 ; i < arguments.length; i++) {
		sum += arguments[i];
	}
	console.log(sum);
}

var myObj = {};
myObj.color = 'green';
myObj.changeColor = function(newColor) {
	this.color = newColor;
}

var myClass = function() {
	this.color = 'green';
	var color2 = 'blue';
	
	this.changeColor = function(newColor) {
		this.color = newColor;
		console.log(this.color);
		console.log(color2);
	}
};
myClass.color3 = 'red';

























