import { combineReducers } from 'redux'
import * as types from './types'

const initialMoviesState = {
  movies: []
}

const moviesReducer = (state = initialMoviesState, { type, payload }) => {
  switch (type) {
    case types.SET_MOVIES:
      return {
        movies: payload.movies,
      }
    default:
      return state
  }
}

const reducers = {
  movies: moviesReducer,
}

export default combineReducers(reducers)
