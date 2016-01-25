/* JS1 - Day 5
 * Function Challenge
 * Corey Shuman
 * 11/16/15
 */
 
function pow2(num) {
	if (!num || typeof num !== "number") {
        return NaN;
    }
	
	return num * num;
}

function capitalizeAndAddPeriod(str) {
	if (!str || typeof str !== "string") {
        return "";
    }
	var returnString = str[0].toUpperCase() + str.slice(1);
	
	if(returnString[returnString.length-1] !== ".") {
		returnString = returnString + ".";
	}
	return returnString;
}

function flipString(str) {
	if (!str || typeof str !== "string") {
        return "";
    }
	
	if(str.length < 2 || str.length % 2 === 1) {
		return "";
	}

	return str.substring(str.length/2, str.length) + str.substring(0, str.length/2);
}

function averageOf4Numbers(numbers) {
	if (!numbers || typeof numbers !== "object" || numbers.length !== 4) {
        return NaN;
    }
	
	if(typeof numbers[0] !== "number" || typeof numbers[1] !== "number" 
		|| typeof numbers[2] !== "number" || typeof numbers[3] !== "number") {
		return NaN;
	}
	
	if(isNaN(numbers[0]) || isNaN(numbers[1]) || isNaN(numbers[2]) || isNaN(numbers[3])) {
		return NaN;
	}
	
	return (numbers[0] + numbers[1] + numbers[2] + numbers[3]) / 4;
}