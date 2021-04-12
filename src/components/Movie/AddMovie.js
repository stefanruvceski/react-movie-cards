import React, { useState } from 'react';

const AddMovie = ({ setMovies, lastId, setShowAdd }) => {
  const initialState = {
    id: lastId + 100,
    title: '',
    subtitle: '',
    description: '',
    year: 2020,
    imageUrl: '',
    rating: 0,
    peopleRated: 0,
  };
  const [movie, setMovie] = useState(initialState);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setMovie({ ...movie, [name]: value });
  };
  const required = val => val && val.length;
  const handleSubmit = e => {
    e.preventDefault();
    console.log(lastId);
    if (required(movie.title) && required(movie.subtitle) && required(movie.description) && required(movie.imageUrl)) {
      setMovies(movies => {
        return [...movies, movie];
      });
      console.log(movie);
      setShowAdd(false);
      setMovie(initialState);
    }
  };

  return (
    <div className="text-center ">
      <form>
        <div className="form-group card col-4 p-2">
          {/* <label htmlFor="title">Title</label> */}
          {movie.title.length === 0 && (
            <div>
              <span className="text-danger float-left">Required</span>
            </div>
          )}
          <input type="text" name="title" id="title" value={movie.title} onChange={handleChange} placeholder="Title" />
        </div>
        <div className="form-group card col-4 p-2 ">
          {/* <label htmlFor="subtitle">Subtitle</label> */}
          {movie.subtitle.length === 0 && (
            <div>
              <span className="text-danger float-left">Required</span>
            </div>
          )}
          <input
            type="text"
            name="subtitle"
            id="subtitle"
            value={movie.subtitle}
            onChange={handleChange}
            placeholder="Subtitle"
          />
        </div>
        <div className="form-group card col-4 p-2">
          {/* <label htmlFor="description">Description</label> */}
          {movie.description.length === 0 && (
            <div>
              <span className="text-danger float-left">Required</span>
            </div>
          )}
          <textarea
            type="text"
            name="description"
            id="description"
            value={movie.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>
        <div className="form-group card col-4 p-2">
          {/* <label htmlFor="year">Year</label> */}
          {movie.year.length === 0 && (
            <div>
              <span className="text-danger float-left">Required</span>
            </div>
          )}
          <input type="number" name="year" id="year" placeholder="Year" value={movie.year} onChange={handleChange} />
        </div>
        <div className="from-group card col-4 p-2">
          {/* <label htmlFor="imageUrl">Image Url</label> */}
          {movie.imageUrl.length === 0 && (
            <div>
              <span className="text-danger float-left">Required</span>
            </div>
          )}
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            alt="Login"
            value={movie.imageUrl}
            placeholder="Image Url"
            onChange={handleChange}
          />
        </div>
        {/* <div className="from-group">
          <label htmlFor="rating">Stars</label>
          <select value={movie.rating} onChange={handleChange} id="rating" name="raring">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div> */}
        <div className="mt-2">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;
