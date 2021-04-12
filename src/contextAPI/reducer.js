const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return { ...state, movies: [...state.movies, action.payload], showAdd: false };
    case 'SHOW_ADD':
      return { ...state, showAdd: !state.showAdd };
    case 'DELETE_MOVIE':
      const filtered = state.movies.filter(movie => movie.id !== action.payload);
      return { ...state, movies: filtered };
    case 'CHANGE_RATING':
      const newMovies = state.movies.map(m => {
        console.log(action.payload);
        if (m.id === action.payload.id) {
          const temp = calculateAvg(m.rating, m.peopleRated, action.payload.newRating);
          console.log(m, temp);
          m.rating = temp;
          m.peopleRated += 1;
        }
        return m;
      });

      return { ...state, movies: newMovies };
    default:
      return state;
  }
};

const calculateAvg = (avg, peopleRated, rating) => {
  return (avg * peopleRated + rating) / (peopleRated + 1);
};

export default reducer;
