import React from "react";
import Hero from "./Hero";

// TMDB API 74d33cb230b329de3dbba1fd04d2268a
// example link for movie search https://api.themoviedb.org/3/search/keyword

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img
          src={posterUrl}
          className="card-img-top"
          alt={movie.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <a href="#" className="btn btn-primary">
            Show Details
          </a>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHTML = searchResults.map((searchResult) => {
    return <MovieCard movie={searchResult} key={searchResult.id} />;
  });
  return (
    <div>
      <Hero text={title} />
      {resultsHTML && (
        <div className="container">
          <div className="row">{resultsHTML}</div>
        </div>
      )}
    </div>
  );
};

export default SearchView;
