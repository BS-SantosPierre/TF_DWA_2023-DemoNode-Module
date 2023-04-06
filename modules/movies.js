const movies = [
    { id: 1, title: 'John Wick 4', rating: 9.2, genre: 'action', year: 2023 },
    { id: 2, title: 'Mario', rating: 9.9, genre: 'animation', year: 2023 },
    { id: 3, title: 'Sonic 2', rating: 8.3, genre: 'animation', year: 2022 },
];

let currentMovieID = 3;

const addMovie = (title, rating, genre, year) => {
    // currentMovieID++ => 3 
    // ++currentMovieID => 4 
    const movie = {
        id: ++currentMovieID,
        title: title, // Equivalent à juste title
        rating,
        genre,
        year,
    };

    movies.push(movie);

    return movie;
};

const getMovies = () => {
    return movies;
}

const getMovie = (id) => {
    return movies.find((movie) => {
        return movie.id === id;
    });
};

const deleteMovie = (id) => {
    // Chercher l'index de l'élément à supprimer
    const indexMovie = movies.findIndex((movie) => movie.id === id);
    if (indexMovie !== -1) {
        movies.splice(indexMovie, 1);
    }
}

const upvoteMovie = (id) => {
    const movie = getMovie(id);

    // if (movie){
    if (movie !== undefined) {
        movie.rating += 0.1;
        // movie.rating = movie.rating + 0.1;
    }

    return movie;
};

const downvoteMovie = (id) => {
    const movie = getMovie(id);

    // if (movie){
    if (movie !== undefined) {
        movie.rating -= 0.1;
        // movie.rating = movie.rating - 0.1;
    }

    return movie;
};

module.exports = { addMovie, deleteMovie, downvoteMovie, getMovie, getMovies, upvoteMovie };