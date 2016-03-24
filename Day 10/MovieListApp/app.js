// Movie List App
// Corey Shuman
// 3/23/16
"use strict";


var div = document.getElementById("movieListDiv");

var movieObjs = [
	{title: "Star Wars", release: 1977, genre: "sci-fi"},
	{title: "Inception", release: 2010, genre: "sci-fi"},
	{title: "The Matrix", release: 1999, genre: "sci-fi"}
];

function printMovieList() {
	div.innerHTML = "";
	for (var i = 0; i < movieObjs.length; i++) {
		var movie = movieObjs[i];
		var a = document.createElement("p");
		a.textContent = movie.title + " - " + movie.genre;
		a.setAttribute("rel", movie.release);
		a.setAttribute("style", "color:#009933;");
		a.addEventListener("click", function () {
			alert(this.getAttribute("rel"));
		});

		div.appendChild(a);
	}
}

var form = document.getElementById("newMovieForm");
 
 
 
form.addEventListener("submit", function (evt) {
	var movie = document.getElementById("movieTitle").value;
	var release = document.getElementById("movieRelease").value;
	var genre = getGenre();
	//alert(movie);
	evt.preventDefault();
	//console.log(evt);
	var newMovieObj = {title: movie, release: release, genre: genre};
	movieObjs.push(newMovieObj);
	printMovieList();
});

var genreInputs = document.getElementsByName("genre");
console.log(genreInputs);

function getGenre() {
	var genre;
	 
	for (var i = 0; i < genreInputs.length; i++) {
	  var genreInput = genreInputs[i];
	  if (genreInput.checked) {
		genre = genreInput.value;
	  }
	}

	return genre;
}


printMovieList();








