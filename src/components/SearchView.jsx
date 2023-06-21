import React from "react";
import Hero from "./Hero";

// TMDB API 74d33cb230b329de3dbba1fd04d2268a
// example link for movie search https://api.themoviedb.org/3/search/keyword

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  return (
    <div>
      <Hero text={title} />
    </div>
  );
};

export default SearchView;
