import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, setMovies) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard movies={movies} setMovies={setMovies} key={movie.id} movie={movie} />
    ))}
  </div>
);

const MovieList = ({ movies, setMovies }) => {
  if (movies.length === 0) {
    return (
      <div className="text-center">
        <h1>No movies to show</h1>
      </div>
    );
  } else {
    return <div>{getMovies(movies, setMovies)}</div>;
  }
};

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
