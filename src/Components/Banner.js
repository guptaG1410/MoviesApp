import { getMovies } from "./tempAPI";
import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    // console.log(getMovies.results);
    let movie = getMovies.results[4];

    return (
      <>
        {movie === "" ? (
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          </div>
        ) : (
          <div className="card mb-3 banner-card">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              className="card-img-top banner-img"
              alt={"movie.title"}
            />
            <div className="card-body">
              <h2 className="card-title banner-title">
                {movie.original_title}
              </h2>
              <p className="card-text banner-text">{movie.overview}</p>
            </div>
          </div>
        )}
      </>
    );
  }
}
