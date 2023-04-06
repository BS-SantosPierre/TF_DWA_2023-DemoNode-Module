const movie = require('./modules/movies');

// Ajout d'un film
const newMovie = movie.addMovie('Little Pony', 10, 'fun', 2023);
console.log(movie.getMovies());

// Suppression d'un film Adieu My Little Pony :(
movie.deleteMovie(newMovie.id);
console.log(movie.getMovies());

// Upvote sonic qui à l'id 3
const sonic = movie.upvoteMovie(3);
console.log(movie.getMovies());

