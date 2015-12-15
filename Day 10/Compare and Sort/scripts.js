var input = document.createElement('input');
var input1 = document.createElement('input');
var button = document.createElement('button');
var biggestButton = document.createElement('button');
var div = document.createElement('div');
var container = document.createElement('div');

var myArray = [];

input.setAttribute('id', 'input');
input.setAttribute('style', 'display:block;');

input1.setAttribute('id', 'input1');
input1.setAttribute('style', 'display:block;');

button.setAttribute('id', 'button');
button.setAttribute('style', 'margin-right: 5px; margin-top: 5px; border: 0px; width: 60px; cursor: pointer; height: 20px; float: left;');

biggestButton.setAttribute('id', 'biggestButton');
biggestButton.setAttribute('style', 'margin-right: 5px; margin-top: 5px; border: 0px; width: 60px; cursor: pointer; height: 20px; float: left;');

button.innerHTML = 'compare';
biggestButton.innerHTML = 'largest';

div.setAttribute('id', 'answerhold');
div.setAttribute('style', 'text-align: center; color: white; clear: both');

container.setAttribute('style', 'background-color: gray; margin: auto; display:block; width: 300px; height: 200px; padding: 10px;');

container.appendChild(input);
container.appendChild(input1);
container.appendChild(button);
container.appendChild(biggestButton);
container.appendChild(div);

document.body.appendChild(container);

button.addEventListener('click', function() {
	var inputTop = input.value;
	var inputBottom = input1.value;
	
	var answer = compare(inputTop, inputBottom);
	
	div.insertAdjacentHTML('afterbegin', answer);
	input.value = '';
	input1.value = '';
});

function compare(ans1, ans2) {
	if(isNaN(ans1) || isNaN(ans2) || ans1 === '' || ans2 === '') {
		return '<br>' + 'Not number';
	} else if(parseInt(ans1) > parseInt(ans2)) {
		myArray.push(parseInt(ans1));
		return '<br>' + ans1 + ' is larger';
	} else  {
		myArray.push(parseInt(ans2));
		return '<br>' + ans2 + ' is larger';
	}
}

biggestButton.addEventListener('click', function() {
	var temp = 0;
	for (var j = 0; j < myArray.length; j++) {
		for (var i = 0; i < myArray.length; i++) {
			if(myArray[i] < myArray[i + 1]) {
				temp = myArray[i];
				myArray[i] = myArray[i + 1];
				myArray[i + 1] = temp;
			}
		}
	}
	div.innerHTML = '<br>' + myArray[0] + ' is the largest!';
})

