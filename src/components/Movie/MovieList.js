import React from 'react';
import { useGlobalContext } from '../../contextAPI/context';
import MovieCard from './MovieCard';

const getMovies = movies => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

const MovieList = () => {
  const {
    state: { movies },
  } = useGlobalContext();
  if (movies.length === 0) {
    return (
      <div className="text-center">
        <h1>No movies to show</h1>
      </div>
    );
  } else {
    return <div>{getMovies(movies)}</div>;
  }
};

export default MovieList;
