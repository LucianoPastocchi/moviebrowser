import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import SearchView from "./components/SearchView";

function App() {
  const [searchResults, setSearchResults] = useState([]); //store in the overall app
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log(searchText);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=74d33cb230b329de3dbba1fd04d2268a&language=en-US&query=${searchText}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results));
  }, [searchText]);

  return (
    <div>
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          exact
          path="/search"
          element={
            <SearchView keyword={searchText} searchResults={searchResults} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
