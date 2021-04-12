import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../../contextAPI/context';
import StarRating from '../StarRating';

const MovieCard = ({ movie }) => {
  const { deleteMovie } = useGlobalContext();
  const [hover, setHover] = useState(false);

  const handleDelete = id => {
    deleteMovie(id);
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
            <div className="float-left mt-1 mb-3">
              <StarRating rating={movie.rating} id={movie.id} />
            </div>

            <div
              className="card-footer-badge float-right badge badge-primary badge-pill"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {Math.round((movie.rating + Number.EPSILON) * 100) / 100}
            </div>

            <div className="float-right">
              <button type="button" className="btn btn-danger btn-sm mr-1" onClick={() => handleDelete(movie.id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {hover && <h5 className="bold float-right mt-1 mb-2">People rated:{movie.peopleRated}</h5>}
      {!hover && <h5 className="float-right mt-1 mb-3"></h5>}
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
