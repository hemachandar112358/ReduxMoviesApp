import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from "./types";
import axios from "axios";

const API_KEY = "35d22052";
export const searchMovieAction = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MOVIE,
    payload: text,
  });
};

export const fetchMoviesAction = (text) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}`)
    .then((res) => {
      dispatch({
        type: FETCH_MOVIES,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const fetchMovieAction = (id) => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
    .then((res) => {
      dispatch({
        type: FETCH_MOVIE,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};

export const loadingAction = () => {
  return {
    type: LOADING,
  };
};

// const searchMovieAction = text=>{
//     return{
//         type:SEARCH_MOVIE,
//         payload:text
//     }
// }

// store.dispatch(searchMovieAction(text))

// export default searchMovieAction;
