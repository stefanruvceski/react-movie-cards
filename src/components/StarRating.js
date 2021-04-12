import React from 'react';
import PropTypes from 'prop-types';
import { useGlobalContext } from '../contextAPI/context';
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

const StarRating = ({ rating, id }) => {
  const { changeStarRating } = useGlobalContext();

  const handleClick = newRating => {
    changeStarRating(id, newRating);
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
            <i className="fa fa-star fa-lg" style={styles.star} onClick={() => handleClick(1)}></i>
            <i className="fa fa-star fa-lg" style={styles.star} onClick={() => handleClick(2)}></i>
            <i className="fa fa-star fa-lg" style={styles.star} onClick={() => handleClick(3)}></i>
            <i className="fa fa-star fa-lg" style={styles.star} onClick={() => handleClick(4)}></i>
            <i className="fa fa-star fa-lg" style={styles.star} onClick={() => handleClick(5)}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
  id: 0,
  peopleRated: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
  id: PropTypes.number,
  peopleRated: PropTypes.number,
};

export default StarRating;
