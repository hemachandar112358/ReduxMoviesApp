import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";
import NotFound from "./ErrorPage";

class ShowMovieList extends React.Component {
  render() {
    let searchedMovies = this.props.movies;
    let showSearchedMovies = "";

    if (searchedMovies.Response == "True") {
      showSearchedMovies = searchedMovies.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ));
    } else if (searchedMovies.Response == "False") {
      showSearchedMovies = <NotFound />;
    }

    return <div className="row">{showSearchedMovies}</div>;
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(ShowMovieList);
