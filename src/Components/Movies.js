import React, { Component } from "react";
import axios from "axios";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      hoverId: "",
      pageloaded: [1],
      currPage: 1,
      movies: [],
    };
  }

  async componentDidMount() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=c577326255d1cbf0c0fa0faaae3e9b5f&language=en-US&page=${this.state.currPage}`
    );
    let data = res.data;
    console.log(data);
    this.setState({
      movies: [...data.results],
    });
  }

  async changeMovies() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=c577326255d1cbf0c0fa0faaae3e9b5f&language=en-US&page=${this.state.currPage}`
    );
    let data = res.data;
    console.log(data);
    this.setState({
      movies: [...data.results],
    });
  }

  handleLeft = () => {
    if (this.state.currPage !== 1) {
      this.setState(
        {
          currPage: this.state.currPage - 1,
        },
        this.changeMovies
      );
    }
  };

  handleValues = (value) => {
    if (value !== this.state.currPage) {
      this.setState(
        {
          currPage: value,
        },
        this.changeMovies
      );
    }
  };

  handleRight = () => {
    let tempArr = [];
    for (let i = 1; i <= this.state.pageloaded.length + 1; i++) {
      tempArr.push(i);
    }
    this.setState(
      {
        pageloaded: [...tempArr],
        currPage: this.state.currPage + 1,
      },
      this.changeMovies
    ); //Here, changeMovies would act as a callback.
  };

  render() {
    return (
      <>
        {this.state.movies.length === 0 ? (
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
          <div>
            <h3 className="text-center">
              <strong>Trending</strong>
            </h3>
            <div className="movies-list">
              {this.state.movies.map((movieObj) => (
                <div
                  className="card movies-card"
                  onMouseEnter={() => this.setState({ hoverId: movieObj.id })}
                  onMouseLeave={() => this.setState({ hoverId: "" })}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    className="movies-img"
                    style={{ height: "40vh", width: "20vw" }}
                    alt={movieObj.title}
                  />
                  <h3 className="card-title movies-title">
                    {movieObj.original_title}
                  </h3>
                  <div className="button-wrapper">
                    {this.state.hoverId === movieObj.id && (
                      <a className="btn btn-primary movies-button">
                        Add to Favourites
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item" onClick={this.handleLeft}>
                    <a className="page-link" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  {this.state.pageloaded.map((value) => (
                    <li
                      className="page-item"
                      onClick={() => this.handleValues(value)}
                    >
                      <a class="page-link">{value}</a>
                    </li>
                  ))}
                  <li className="page-item" onClick={this.handleRight}>
                    <a className="page-link" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </>
    );
  }
}
