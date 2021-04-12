import React from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';

const MovieCard = ({ movie, setMovies, movies }) => {
  const handleDelete = id => {
    const filtered = movies.filter(m => m.id !== movie.id);
    setMovies(filtered);
  };
  return (
    <div className="movie-card">
      <div className="movie-card card">
        <img className="card-img-top" src={movie.imageUrl} alt="" />
        <div className="card-body">
          <h4 className="card-title">{movie.title}</h4>
          <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
          <p className="text-justify" style={{ fontSize: '14px' }}>
            {movie.description}
          </p>
        </div>
        <div className="card-footer">
          <div className="clearfix">
            <div className="float-left mt-1">
              <StarRating rating={movie.rating} />
            </div>
            <div className="card-footer-badge float-right badge badge-primary badge-pill">{movie.rating}</div>
            <div className="float-right">
              <button type="button" className="btn btn-danger btn-sm mr-1" onClick={() => handleDelete(movie.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
