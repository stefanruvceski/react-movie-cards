import React, { useContext, useReducer, createContext } from 'react';
import MovieService from '../services/MovieService';
import reducer from './reducer';

const AppContext = createContext();
const initialState = {
  movies: MovieService.getMovies(),
  showAdd: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //metode za dispatch
  const getAllMovies = () => {
    dispatch({ type: 'GET_ALL' });
  };
  const deleteMovie = id => {
    dispatch({ type: 'DELETE_MOVIE', payload: id });
  };
  const addMovie = movie => {
    dispatch({ type: 'ADD_MOVIE', payload: movie });
  };
  const showAddFunction = () => {
    dispatch({ type: 'SHOW_ADD' });
  };
  const changeStarRating = (id, newRating) => {
    dispatch({ type: 'CHANGE_RATING', payload: { id: id, newRating: newRating } });
  };

  return (
    <AppContext.Provider
      value={{
        state, //dodati funkcije
        deleteMovie,
        addMovie,
        showAddFunction,
        changeStarRating,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
