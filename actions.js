import * as types from './types'
import axios from 'axios';

export const fetchMovies = () =>
  dispatch =>
    axios.get(`http://localhost:4000/movies`)
      .then(response => {
        dispatch({ type: types.SET_MOVIES, payload: { movies: response.data.data } })
      });
