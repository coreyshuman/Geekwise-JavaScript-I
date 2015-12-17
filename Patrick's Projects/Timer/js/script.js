(function(){

var holder = document.createElement('div');
var button = document.createElement('button');
var input = document.createElement('input');

button.innerHTML = "start";
input.placeholder = "set timer (minutes)";
button.setAttribute('class', 'button');
button.setAttribute('type', 'button');
button.setAttribute('style', 'width: 50px;');
holder.setAttribute('class', 'container');

input.setAttribute('id', 'input');
input.setAttribute('class', 'input');
input.setAttribute('type', 'input');

document.body.appendChild(button);
document.body.appendChild(input);

var interval;

button.addEventListener('click', function(){

  //clear previous timer
  clearInterval(interval);
  var value = document.getElementById('input').value;
  document.getElementById('input').value = '';

  if(value != ''){
    holder.innerHTML = '';
    var count = value * 60;

    //start timer, create values, show them, decrease counter
    interval = setInterval(function(){
      var seconds = count % 60;
      var minutes = count / 60;
      var hours = (count/60) / 60;

      if(minutes >= 60) {
        minutes = minutes % 60;
      }

      holder.innerHTML = Math.floor(hours) + '<br>hours<br>' + Math.floor(minutes) + '<br>minutes<br>' + seconds + '<br>seconds<br>';

      count--;

      if(count == 0){
        holder.setAttribute('style', 'font-size: 10em; text-align: center');
        holder.innerHTML = 'DONE';
        clearInterval(interval);
      }

    }, 1000)
  } else {
    holder.innerHTML = '';
  }
})

holder.setAttribute('style', 'font-size: 3em; text-align: center;')
document.body.appendChild(holder);

}());
