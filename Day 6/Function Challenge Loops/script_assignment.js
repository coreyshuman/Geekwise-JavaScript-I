/* JS1 - Day 5
 * Assignment
 * Requires scripts.js
 * Corey Shuman
 * 11/16/15
 */
 
// We will run our code inside an Immediately-invoked function expression (IIFE).
// This allows us to keep our variables in local scope (avoid polluting the global environment).
(function() {
	// the code in this block is executed once the page has loaded
	// first I copy the test functions from the assignment into my code
	// Test for power of 2 (square) function
	var f1TestArray = [ [2,4], ["a",NaN], [7,49], [-8,64] ];
	// Test for function that capitalizes the first letter and adds a period
	var f2TestArray = [ [1, ""], ["test", "Test."], ["the quick brown fox jumps over the lazy dog", "The quick brown fox jumps over the lazy dog."] ];
	// Test for function that flips first and second half of a string
	var f3TestArray = [ ["a",""], [1,""], ["abcd", "cdab"], ["fournine", "ninefour"], ["12345", ""] ];
	// Test for function that finds the average of an array of four numbers
	var f4TestArray = [ [[2,4,6,8],5], ["a",NaN], [[],NaN], [[1,"a",3,4], NaN],
						[[9,8,0,1],4.5], [[1,1,1,1],1] ];
	
	// Now I'm going to be fancy and join the 4 test arrays into an array.
	// This gives me a single 3-dimensional array to work with.
	var testArray = [f1TestArray, f2TestArray, f3TestArray, f4TestArray];
	// Array index format is now: testArray[function#][test#][argument/result]
	
	var failed = false; // this will let us break out of loops early on a test failure
	var testNumber = 1;	// this will keep our test count
	var n; // this will keep track of which function we are testing
	
	// iterate over our 4 functions
	for(n = 0; n < testArray.length; n++)
	{
		var currentTests = testArray[n];
		// iterate over our current tests
		for(var k = 0; k<currentTests.length; k++)
		{
			// perform the test. Use correct function based on name
			var argumentResult = currentTests[k];
			var result = false;
			switch(n) {
				case 0:
					// since we can't directly compare NaN to itself, we need an extra check
					var ret = pow2(argumentResult[0]);
					result = argumentResult[1] === ret || (isNaN(argumentResult[1]) && isNaN(ret));
					break;
				case 1:
					result = argumentResult[1] === capitalizeAndAddPeriod(argumentResult[0]);
					break;
				case 2:
					result = argumentResult[1] === flipString(argumentResult[0]);
					break;
				case 3:
					// since we can't directly compare NaN to itself, we need an extra check
					var ret = averageOf4Numbers(argumentResult[0]);
					result = argumentResult[1] === ret || (isNaN(argumentResult[1]) && isNaN(ret));
					break;
				default:
					console.log("error");
					failed = true;
			}
			// if a test fails, set failed to true and break out of loops early
			if(result === false) {
				failed = true;
				// print test number and failed
				console.log("Test #" + testNumber + " FAILED");
				break; // this break will exit the inner for-loop early
			} else {
				// print test number and passed
				console.log("Test #" + testNumber + " passed");
			}
			testNumber ++;
		}
		// if a test failed, break out of loop early
		if(failed === true) {
			break;
		}
	}
	
	// if we get here and n equals testArray.length, that means all tests were successful (we didn't exit loop early)
	if(n === testArray.length) {
		console.log("All tests completed successfully!");
	}

					  

	
})();