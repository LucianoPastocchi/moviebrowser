import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=74d33cb230b329de3dbba1fd04d2268a&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  const renderMovieDetails = () => {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      let posterPath = "image error";
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;

      if (movieDetails.poster_path) {
        posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
      }

      return (
        <div>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt="..."
                  className="img-fluid shadow rounded"
                />
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                {movieDetails.overview ? (
                  <p className="lead">{movieDetails.overview}</p>
                ) : (
                  <p className="lead">"No data"</p>
                )}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return renderMovieDetails();
};

export default MovieView;
