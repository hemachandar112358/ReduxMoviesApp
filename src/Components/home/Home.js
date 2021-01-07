import React from "react";
import SearchForm from "./searchForm";
import { connect } from "react-redux";
import Loading from "../layout/Loading";
import ShowMovieList from "./ShowMovieList";

class Home extends React.Component {
  render() {
    const loading = this.props.loading;
    return (
      <div className="container">
        <SearchForm />
        {loading ? <Loading /> : <ShowMovieList />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Home);
