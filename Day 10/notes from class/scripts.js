
var button = document.getElementById("alert");

var clickEvent = function clickEvent() {
	alert(this.getAttribute("rel"));
}

button.addEventListener("click", clickEvent);

button.removeEventListener("click", clickEvent);

//loop our movie array and create one li for each movie,
//with the title as the text
var movieObjs = [
	{title: "Star Wars", date: 1977},
	{title: "Inception", date: 2010},
	{title: "The Matrix", date: 1999}
];
for (var i = 0; i < movieObjs.length; i++) {
	var movie = movieObjs[i];
	var a = document.createElement("p");
	a.textContent = movie.title;
	a.setAttribute("rel", movie.date);
	a.setAttribute("style", "color:red;");
	a.addEventListener("click", function () {
		alert(this.getAttribute("rel"));
	});

	document.body.appendChild(a);
}

var form = document.getElementById("newMovieForm");

form.addEventListener("submit", function (evt) {
	var movie = document.getElementById("movieTitle").value;
	alert(movie);
	evt.preventDefault();
	console.log(evt);
});

/*
var genreInputs = document.getElementsByName("genre");
console.log(genreInputs);


function radioHandler(evt) {
	var genre;
	for (var i = 0; i < genreInputs.length; i++) {
	  var genreInput = genreInputs[i];
	  if (genreInput.checked) {
		genre = genreInput.value;
	  }
	}

	console.log(genre);
}

for(var i = 0; i < genreInputs.length; i++) {
	genreInputs[i].addEventListener("change", radioHandler);
}
*/

var genreInputs = document.getElementsByName("genre");
       //console.log(genreInputs);
   
       genre.addEventListener("click", function () {
             var genre;

              for (var i = 0; i < genreInputs.length; i++) {
                 var genreInput = genreInputs[i];
                     if (genreInput.checked) {
                   genre = genreInput.value;
                 }
           }

           console.log(genre);
       });
