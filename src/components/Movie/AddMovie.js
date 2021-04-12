import React, { useState } from 'react';
import { useGlobalContext } from '../../contextAPI/context';
const AddMovie = () => {
  const {
    state: { movies },
    addMovie,
  } = useGlobalContext();

  const getLastId = () => {
    return movies[movies.length - 1].id;
  };

  const initialState = {
    id: getLastId() + 100,
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
    if (required(movie.title) && required(movie.subtitle) && required(movie.description) && required(movie.imageUrl)) {
      addMovie(movie);
      setMovie(initialState);
      return;
    }
  };

  return (
    <div className="text-center ">
      <form>
        <div className="form-group card col-4 p-2">
          {movie.title.length === 0 && (
            <div>
              <span className="text-danger float-left">Required</span>
            </div>
          )}
          <input type="text" name="title" id="title" value={movie.title} onChange={handleChange} placeholder="Title" />
        </div>
        <div className="form-group card col-4 p-2 ">
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
          {movie.year.length === 0 && (
            <div>
              <span className="text-danger float-left">Required</span>
            </div>
          )}
          <input type="number" name="year" id="year" placeholder="Year" value={movie.year} onChange={handleChange} />
        </div>
        <div className="from-group card col-4 p-2">
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
