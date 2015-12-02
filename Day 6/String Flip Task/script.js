//Create a function that takes 2 arguments, a string an a number.
//The number will be the point at which you split the string using substring.
//Flip the string just like we did in the previous function.

function flip(str, num) {
	if(typeof str !== "string") {
		return str;
	}
	if(typeof num !== "number") {
		return str;
	}
	return str.substring(num, str.length) + str.substring(0, num);
}
flip("taco", 2);

// corey,1 -> oreyc
// taco,2 -> cota