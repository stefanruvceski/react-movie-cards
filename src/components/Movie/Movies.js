import React, { useEffect, useState } from 'react';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  const getLastId = () => {
    return movies[movies.length - 1].id;
  };

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <button type="button" className="btn btn-primary ml-2" onClick={() => setShowAdd(!showAdd)}>
            Add Movie
          </button>
          {showAdd && <AddMovie setMovies={setMovies} lastId={getLastId()} setShowAdd={setShowAdd} />}
          <hr />
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
