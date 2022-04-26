/* eslint-disable array-callback-return */
import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./MovieListing.scss";

function MovieListing() {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.error}</h3>
      </div>
    );

  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div>
      </div>
    </>
  );
}

export default MovieListing;
