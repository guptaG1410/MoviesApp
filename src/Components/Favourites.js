import React, { Component } from "react";
import { getMovies } from "./tempAPI";

export default class Favourites extends Component {
  constructor() {
    super();
    this.state = {
      genres: [],
      currGenre: "All Genres",
    };
  }

  render() {
    let movies = getMovies.results;
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    let tempArr = [];
    movies.forEach((movie) => {
      if (!tempArr.includes(genreids[movie.genre_ids[0]]))
        tempArr.push(genreids[movie.genre_ids[0]]);
    });

    tempArr.unshift("All Genres");
    console.log(tempArr);

    return (
      <div>
        <div className="main">
          <div className="row">
            <div className="col-3">
              <div className="list-group generes-list">
                {tempArr.map((genre) =>
                  this.state.currGenre == genre ? (
                    <a
                      href="#"
                      className="list-group-item list-group-item-action active"
                    >
                      {genre}
                    </a>
                  ) : (
                    <a
                      href="#"
                      className="list-group-item list-group-item-action"
                    >
                      {genre}
                    </a>
                  )
                )}
              </div>
            </div>
            <div className="col-9 search-table">
              <div className="row">
                <input type="text" className=" col input-group-text" />
                <input type="number" className="col input-group-text" />
              </div>
              <div className="row">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Genre</th>
                      <th scope="col">Popularity</th>
                      <th scope="col">Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {movies.map((obj) => (
                      <tr>
                        <td>
                          <img
                            src={`https://image.tmdb.org/t/p/original${obj.backdrop_path}`}
                            style={{ width: "8rem", paddingLeft: "1rem" }}
                            alt={obj.title}
                          ></img>
                        </td>
                        <td>{genreids[obj.genre_ids[0]]}</td>
                        <td>{obj.popularity}</td>
                        <td>{obj.vote_average}</td>
                        <td>
                          <button type="button" class="btn btn-danger">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item">
                  <a class="page-link" href="#" tabindex="-1">
                    Previous
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
