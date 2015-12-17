

var input = document.createElement('input');
var input1 = document.createElement('input');
var button = document.createElement('button');
var biggestbutton = document.createElement('button');
var div = document.createElement('div');
var container = document.createElement('div');

input.setAttribute('id', 'input');
input.setAttribute('style', 'display: block');
input1.setAttribute('id', 'input1');
input1.setAttribute('style', 'display: block');
button.setAttribute('id', 'button');
button.setAttribute('style', 'margin-right: 5px; margin-top: 5px; border: 0px; width: 60px; cursor: pointer; height: 20px; float: left');
biggestbutton.setAttribute('id', 'biggestbutton');
biggestbutton.setAttribute('style', 'margin-top: 5px; border: 0px; width: 60px; cursor: pointer; height: 20px; float: left');
button.innerHTML='compare';
biggestbutton.innerHTML='largest';
div.setAttribute('id', 'answerhold');
div.setAttribute('style', 'text-align: center; clear: both; color: white');
container.setAttribute('style', 'background-color: gray; margin: auto; display: block; width: 300px; height: 200px; overflow-y: auto; padding: 10px');

var array = [];

button.addEventListener('click', function() {
  var inputleft = document.getElementById('input').value;
  var inputright = document.getElementById('input1').value;

  var answer = compare(inputleft, inputright);

  console.log(array);
  div.insertAdjacentHTML('afterbegin', answer);
  document.getElementById('input').value = '';
  document.getElementById('input1').value = '';

});

biggestbutton.addEventListener('click', function() {
  var temp = 0;
  for(var j = 0; j < array.length; j++){
    for(var i=0; i < array.length; i++) {
      if(array[i] < array[i+1]){
        temp = array[i];
        array[i] = array[i+1];
        array[i+1]= temp;
      }
    }
  }
  div.innerHTML = '<br>' + array[0] + ' is the largest!';


});

function compare(ans1, ans2) {

  if(isNaN(ans1) || isNaN(ans2)){
    return '<br>' + 'Not numbers';
  }else if(parseInt(ans1) > parseInt(ans2)){
    array.push(parseInt(ans1));
    return '<br>' + ans1 + ' is larger';
  } else {
    array.push(parseInt(ans2));
    return '<br>' + ans2 + ' is larger';
  }
};

container.appendChild(input);
container.appendChild(input1);
container.appendChild(button);
container.appendChild(biggestbutton);
container.appendChild(div);

document.body.appendChild(container);
