import React from 'react';
import PropTypes from 'prop-types';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = rating => {
  return Math.floor((rating * width) / 5);
};

const calculateAvg = (avg, peopleRated, rating) => {
  return (avg * peopleRated + rating) / (peopleRated + 1);
};

const StarRating = ({ rating, setMovies, movies, id, peopleRated }) => {
  const handleClick = currectRating => {
    const newRating = calculateAvg(rating, peopleRated, currectRating);

    const newMovies = movies.map(m => {
      if (m.id === id) {
        m.rating = newRating;
        m.peopleRated += 1;
      }
      return m;
    });

    setMovies(newMovies);
  };

  const containerStyle = { width: `${cropWidth(rating)}px` };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => handleClick(1)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => handleClick(2)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => handleClick(3)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => handleClick(4)}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star} onClick={() => handleClick(5)}></i>
          </div>
          <div style={styles.starsInner}>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
