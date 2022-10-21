// import React, { Component } from "react";
// import { getMovies } from "./tempAPI";

// export default class Favourites extends Component {
//   constructor() {
//     super();
//     this.state = {
//       genres: [],
//       currGenre: "All Genres",
//       movies: [],
//       currText: "",
//       limit: 5,
//     };
//   }

//   componentDidMount() {
//     let genreids = {
//       28: "Action",
//       12: "Adventure",
//       16: "Animation",
//       35: "Comedy",
//       80: "Crime",
//       99: "Documentary",
//       18: "Drama",
//       10751: "Family",
//       14: "Fantasy",
//       36: "History",
//       27: "Horror",
//       10402: "Music",
//       9648: "Mystery",
//       10749: "Romance",
//       878: "Sci-Fi",
//       10770: "TV",
//       53: "Thriller",
//       10752: "War",
//       37: "Western",
//     };

//     let data = JSON.parse(localStorage.getItem("movies-app") || "[]");

//     let tempArr = [];
//     data.forEach((movie) => {
//       if (!tempArr.includes(genreids[movie.genre_ids[0]]))
//         tempArr.push(genreids[movie.genre_ids[0]]);
//     });

//     tempArr.unshift("All Genres");
//     this.setState({
//       movies: [...data],
//       genres: [...tempArr],
//     });
//   }

//   handleGenreChange = (genre) => {
//     this.setState({
//       currGenre: genre,
//     });
//   };

//   render() {
//     // let movies = getMovies.results;
//     let genreids = {
//       28: "Action",
//       12: "Adventure",
//       16: "Animation",
//       35: "Comedy",
//       80: "Crime",
//       99: "Documentary",
//       18: "Drama",
//       10751: "Family",
//       14: "Fantasy",
//       36: "History",
//       27: "Horror",
//       10402: "Music",
//       9648: "Mystery",
//       10749: "Romance",
//       878: "Sci-Fi",
//       10770: "TV",
//       53: "Thriller",
//       10752: "War",
//       37: "Western",
//     };

//     // This array is used to store all the movies according to the genre and it is written here(render) because whenever genre changes state changes and when state changes render function will be called.
//     let filterArr = [];

//     // Searching movies.
//     // this.state.currText === ""
//     //   ? (filterArr = this.state.movies)
//     //   : (filterArr = this.state.movies.filter((movie) => {
//     //       let title = movie.original_title.toLowerCase();
//     //       return title.includes(this.state.currText.toLocaleLowerCase());
//     //     }));
//     if (this.state.currText != "") {
//       filterArr = this.state.movies.filter((movieObj) => 
//         // let title = movieObj.original_title.toLowerCase();
//         movieObj.original_title.toLowerCase().indexOf(this.state.currText.toLowerCase()) == -1 ? false : true
//       );
//     } else {
//       filterArr = this.state.movies;
//     }

//     // Changing movies according to the genre
//     if (this.state.currGenre !== "All Genres") {
//       filterArr = this.state.movies.filter(
//         (movie) => genreids[movie.genre_ids[0]] === this.state.currGenre
//       );
//     }

//     return (
//       <div>
//         <div className="main">
//           <div className="row">
//             <div className="col-3">
//               <div className="list-group generes-list">
//                 {this.state.genres.map((genre) =>
//                   this.state.currGenre === genre ? (
//                     <a
//                       href="#"
//                       className="list-group-item list-group-item-action active"
//                     >
//                       {genre}
//                     </a>
//                   ) : (
//                     <a
//                       href="#"
//                       className="list-group-item list-group-item-action"
//                       onClick={() => this.handleGenreChange(genre)}
//                     >
//                       {genre}
//                     </a>
//                   )
//                 )}
//               </div>
//             </div>
//             <div className="col-9 search-table">
//               <div className="row">
//                 <input
//                   type="text"
//                   className=" col input-group-text"
//                   placeholder="Search"
//                   value={this.state.currText}
//                   onChange={(e) =>
//                     this.setState({ currText: e.currentTarget.value })
//                   }
//                 />
//                 <input
//                   type="number"
//                   className="col input-group-text"
//                   placeholder="Movies Count"
//                 />
//               </div>
//               <div className="row">
//                 <table className="table table-hover">
//                   <thead>
//                     <tr>
//                       <th scope="col">Title</th>
//                       <th scope="col">Genre</th>
//                       <th scope="col">Popularity</th>
//                       <th scope="col">Rating</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {filterArr.map((obj) => (
//                       <tr>
//                         <td>
//                           <img
//                             src={`https://image.tmdb.org/t/p/original${obj.backdrop_path}`}
//                             style={{ width: "8rem", paddingLeft: "1rem" }}
//                             alt={obj.title}
//                           ></img><h6 style={{display: "inline", marginLeft: "16px"}}>{obj.original_title}</h6>
//                         </td>
//                         <td>{genreids[obj.genre_ids[0]]}</td>
//                         <td>{obj.popularity}</td>
//                         <td>{obj.vote_average}</td>
//                         <td>
//                           <button type="button" class="btn btn-danger">
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//             <nav aria-label="Page navigation example">
//               <ul class="pagination justify-content-center">
//                 <li class="page-item">
//                   <a class="page-link" href="#" tabIndex="-1">
//                     Previous
//                   </a>
//                 </li>
//                 <li class="page-item">
//                   <a class="page-link" href="#">
//                     1
//                   </a>
//                 </li>
//                 <li class="page-item">
//                   <a class="page-link" href="#">
//                     2
//                   </a>
//                 </li>
//                 <li class="page-item">
//                   <a class="page-link" href="#">
//                     3
//                   </a>
//                 </li>
//                 <li class="page-item">
//                   <a class="page-link" href="#">
//                     Next
//                   </a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';
import { getMovies } from "./tempAPI";


export default class Favourite extends Component {
    constructor(){
        super();
        this.state={
            genres:[],
            currgen:'All Genres',
            movies:[],
            currText:'',
            limit:5,
            currPage:1
        }
    }
    componentDidMount(){
        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};
        let data = JSON.parse(localStorage.getItem("movies-app") || "[]")
        let temp = []
        data.forEach((movieObj)=>{
            if(!temp.includes(genreids[movieObj.genre_ids[0]])){
                temp.push(genreids[movieObj.genre_ids[0]]);
            }
         })
         temp.unshift('All Genres');
         this.setState({
             genres:[...temp],
             movies:[...data]
         })
    }
    handleGenreChange=(genre)=>{
        this.setState({
            currgen:genre
        })
    }
    sortPopularityDesc=()=>{
        let temp = this.state.movies;
        temp.sort(function(objA,objB){
            return objB.popularity-objA.popularity
        })
        this.setState({
            movies:[...temp]
        })
    }
    sortPopularityAsc=()=>{
        let temp = this.state.movies;
        temp.sort(function(objA,objB){
            return objA.popularity-objB.popularity
        })
        this.setState({
            movies:[...temp]
        })
    }

    sortRatingDesc=()=>{
        let temp = this.state.movies;
        temp.sort(function(objA,objB){
            return objB.vote_average-objA.vote_average
        })
        this.setState({
            movies:[...temp]
        })
    }
    sortRatingAsc=()=>{
        let temp = this.state.movies;
        temp.sort(function(objA,objB){
            return objA.vote_average-objB.vote_average
        })
        this.setState({
            movies:[...temp]
        })
    }
    handlePageChange=(page)=>{
        this.setState({
            currPage:page
        })
    }
    handleDelete=(id)=>{
        let newarr = [];
        newarr = this.state.movies.filter((movieObj)=>movieObj.id!=id)
        this.setState({
            movies:[...newarr]
        })
        localStorage.setItem("movies-app",JSON.stringify(newarr))
    }
    render() {
        let genreids = {28:'Action',12:'Adventure',16:'Animation',35:'Comedy',80:'Crime',99:'Documentary',18:'Drama',10751:'Family',14:'Fantasy',36:'History',
                        27:'Horror',10402:'Music',9648:'Mystery',10749:'Romance',878:'Sci-Fi',10770:'TV',53:'Thriller',10752:'War',37:'Western'};

        let filterarr = [];

        if(this.state.currText===''){
            filterarr=this.state.movies
        }else{
            filterarr=this.state.movies.filter((movieObj)=>{
                let title = movieObj.original_title.toLowerCase();
                return title.includes(this.state.currText.toLowerCase())
            })
        }

        // if(this.state.currgen=="All Genres"){
        //     filterarr = this.state.movies
        // }
        if(this.state.currgen!="All Genres"){
            filterarr = this.state.movies.filter((movieObj)=>genreids[movieObj.genre_ids[0]]==this.state.currgen)
        }
        let pages = Math.ceil(filterarr.length/this.state.limit);
        let pagesarr = [];
        for(let i=1;i<=pages;i++){
            pagesarr.push(i);
        }
        let si = (this.state.currPage-1)*this.state.limit;
        let ei = si+this.state.limit;
        filterarr = filterarr.slice(si,ei);
        return (
            <div>
                <>
                    <div className="main">
                        <div className="row">
                            <div className="col-lg-3 col-sm-12">
                            <ul class="list-group favourites-genres">
                                {
                                    this.state.genres.map((genre)=>(
                                        this.state.currgen == genre ?
                                        <li class="list-group-item" style={{background:'#3f51b5',color:'white',fontWeight:'bold'}} >{genre}</li> :
                                        <li class="list-group-item" style={{background:'white',color:'#3f51b5'}} onClick={()=>this.handleGenreChange(genre)}>{genre}</li>
                                    ))
                                }
                            </ul>
                            </div>
                            <div className="col-lg-9 favourites-table col-sm-12">
                                <div className="row">
                                    <input type="text" className="input-group-text col" placeholder="Search" value={this.state.currText} onChange={(e)=>this.setState({currText:e.target.value})}/>
                                    <input type="number" className="input-group-text col" placeholder="Rows Count" value={this.state.limit} onChange={(e)=>this.setState({limit:e.target.value})}/>
                                </div>
                                <div className="row">
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col"><i class="fas fa-sort-up" onClick={this.sortPopularityDesc}/>Popularity<i class="fas fa-sort-down" onClick={this.sortPopularityAsc}></i></th>
                                        <th scope="col"><i class="fas fa-sort-up" onClick={this.sortRatingDesc}></i>Rating<i class="fas fa-sort-down" onClick={this.sortRatingAsc}></i></th>
                                        <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filterarr.map((movieObj)=>(
                                                <tr>
                                                    <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} alt={movieObj.title} style={{width:'5rem'}}/> {movieObj.original_title}</td>
                                                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                                                    <td>{movieObj.popularity}</td>
                                                    <td>{movieObj.vote_average}</td>
                                                    <td><button type="button" class="btn btn-danger" onClick={()=>this.handleDelete(movieObj.id)}>Delete</button></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                    </table>
                                </div>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        {
                                            pagesarr.map((page)=>(
                                                <li class="page-item"><a class="page-link" onClick={()=>this.handlePageChange(page)}>{page}</a></li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </>
            </div>
        )
    }
}