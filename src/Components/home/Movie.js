import React from "react";
import { connect } from "react-redux";
import Loading from "../layout/Loading";
import { fetchMovieAction, loadingAction } from "../../actions/searchAction";
import NoPoster from "./no-poster.jpg";

class Movie extends React.Component {
  componentDidMount() {
    this.props.fetchMovieAction(this.props.match.params.id);
    this.props.loadingAction();
  }
  render() {
    const movie = this.props.movie;
    const loading = this.props.loading;

    const movieInfo = (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-md-4 card card-body" style={{ border: "none" }}>
              {movie.Poster !== "N/A" ? (
                <img
                  className="card-img-top"
                  src={movie.Poster}
                  alt={movie.Title}
                />
              ) : (
                <img
                  className="card-img-top"
                  src={NoPoster}
                  alt={movie.Title}
                />
              )}
            </div>
            <div className="col-md-8">
              <h2 className="mb-4">{movie.Title}</h2>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>About:</strong> {movie.Plot}
                </li>
                <li className="list-group-item">
                  <strong>Genre:</strong> {movie.Genre}
                </li>
                <li className="list-group-item">
                  <strong>Type:</strong> {movie.Type}
                </li>
                {movie.Type === "movie" ? (
                  <li className="list-group-item">
                    <strong>Box Office:</strong> {movie.BoxOffice}
                  </li>
                ) : null}

                <li className="list-group-item">
                  <strong>Released:</strong> {movie.Released}
                </li>

                <li className="list-group-item">
                  <strong>IMDB Rating:</strong> {movie.imdbRating}
                  <a
                    href={"https://www.imdb.com/title/" + movie.imdbID}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary ml-2"
                  >
                    View on IMDB
                  </a>
                </li>
                <li className="list-group-item">
                  <strong>Director:</strong> {movie.Director}
                </li>
                <li className="list-group-item">
                  <strong>Actors:</strong> {movie.Actors}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );

    const content = loading ? <Loading /> : movieInfo;

    return <div>{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { fetchMovieAction, loadingAction })(
  Movie
);
