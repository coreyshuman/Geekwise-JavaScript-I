/* JS1 - Day 5
 * Assignment
 * Requires scripts.js
 * Corey Shuman
 * 11/16/15
 */
 
// We will run our code inside an Immediately-invoked function expression (IIFE).
// This allows us to keep our variables in local scope (avoid polluting the global environment).
(function() {
	// the code here is executed once in its own 
	var testArray = [ [42, null], ["the quick brown fox jumps over the lazy dog", null],
					  ["fournine", null], [[33,5,67,19], null] ];
					  
	// declare our function that will process the test array
	function processTestArray(arr) {
		// part 1 - test value is at arr[0][0], save result to arr[0][1]
		arr[0][1] = pow2(arr[0][0]);
		// part 2 - test value is at arr[1][0], save result to arr[1][1]
		arr[1][1] = capitalizeAndAddPeriod(arr[1][0]);
		// part 3 - test value is at arr[2][0], save result to arr[2][1]
		arr[2][1] = flipString(arr[2][0]);
		// part 4 - test value is at arr[3][0], save result to arr[3][1]
		arr[3][1] = averageOf4Numbers(arr[3][0]);
		// This function returns undefined
	}
	
	// let's log testArray to the console, call our function, then log again
	console.log(testArray.join(" | "));
	processTestArray(testArray);
	console.log(testArray.join(" | "));
	
})();