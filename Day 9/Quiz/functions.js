function num2arr(num1, num2) {
	return [num1+num2, num1*num2];
}

function numCompare(num1, num2) {
	if(num1 < num2) {
		return "smaller";
	} else if(num1 > num2) {
		return "larger";
	} else {
		return "equal";
	}
}

function fizzBuzz() {
	for(var i = 1; i <= 100; i++) {
		var str = "";
		
		if(i % 3 === 0) {
			str +=  "Fizz";
		}
		
		if(i % 5 === 0) {
			str +=  "Buzz";
		}
		
		if(str === "") {
			str = i;
		}
		
		console.log(str);
	}
}

function isUpper(c) {
	if(c === c.toUpperCase()) {
		return true;
	} else {
		return false;
	}
}	

function str2arr(str) {
	var arr = [];
	for(var i=0; i<str.length; i++) {
		arr.push(str[i]);
	}
	return arr;
}
	
function sort(arr) {
	n = arr.length;
	for(var j = 0; j < n; j++) {
		done = true;
		for(var k = n-1; k > j; k--) {
			if(arr[k] < arr[k-1]) {
				var temp = arr[k];
				arr[k] = arr[k-1];
				arr[k-1] = temp;
				done = false;
			}
		}
		if(done) break;
	}
	return arr;
}	
	
	
	
	
	