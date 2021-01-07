import React from "react";
import { Link } from "react-router-dom";
import NoPoster from "./no-poster.jpg";

class MovieCard extends React.Component {
  render() {
    const movie = this.props.movie;
    return (
      <div>
        <div
          className="card mb-2 mr-3 mt-5"
          style={{ width: "12rem", height: "25rem" }}
        >
          {movie.Poster !== "N/A" ? (
            <img
              className="card-img-top"
              src={movie.Poster}
              alt={movie.Title}
            />
          ) : (
            <img className="card-img-top" src={NoPoster} alt={movie.Title} />
          )}

          <div className="card-body">
            <span className="card-title">
              {movie.Title}
              {/* - {movie.Year} */}
            </span>
          </div>
          <Link to={"/movie/" + movie.imdbID} className="btn btn-primary my-10">
            Details
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
