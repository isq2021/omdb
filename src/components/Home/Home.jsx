import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

function Home() {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`/?apiKey=${APIkey}&s=${movieText}&type=movie`)
        .catch((error) => {
          console.log(error);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <>
      <div>
        <div className="banner-img"></div>
        <MovieListing />
      </div>
    </>
  );
}

export default Home;
