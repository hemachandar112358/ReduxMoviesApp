import React from "react";
import {
  searchMovieAction,
  fetchMoviesAction,
  loadingAction,
} from "../../actions/searchAction";

import { connect } from "react-redux";

class SearchForm extends React.Component {
  searchChange = (e) => {
    this.props.searchMovieAction(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMoviesAction(this.props.text);
    this.props.loadingAction();
  };

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form
            className="card card-sm"
            style={{ marginTop: "10%" }}
            onSubmit={this.onSubmit}
          >
            <div className="card-body row no-gutters align-items-center">
              {/* <div className="col-auto">
                <i className="fas fa-search h4 text-body"></i>
              </div> */}

              <div className="col">
                <input
                  className="form-control form-control-md form-control-borderless"
                  type="search"
                  placeholder="Search Movies or Series"
                  onChange={this.searchChange}
                />
              </div>

              <div className="col-auto">
                <button
                  className="btn btn-lg btn-success btn-sm ml-2"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStateToProps, {
  searchMovieAction,
  fetchMoviesAction,
  loadingAction,
})(SearchForm);
