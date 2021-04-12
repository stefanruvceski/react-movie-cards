import React from 'react';
import { useGlobalContext } from '../../contextAPI/context';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

const Movies = () => {
  const {
    state: { showAdd },
    showAddFunction,
  } = useGlobalContext();

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <button
            type="button"
            className="btn btn-primary ml-2"
            onClick={() => {
              showAddFunction();
            }}
          >
            Add Movie
          </button>
          {showAdd && <AddMovie />}
          <hr />
          <MovieList />
        </div>
      </div>
    </div>
  );
};

export default Movies;
