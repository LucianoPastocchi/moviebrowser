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
