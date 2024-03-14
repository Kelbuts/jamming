import "./App.css";
import React, { useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";

const TRACKS = [
  {
    name: "Relic",
    artist: "Vice State",
    album: "Relic",
    id: "3toHaLUlHzXqoduPCDVQZp?si=cdea325b5b814c94",
  },
  {
    name: "Fallen Angel",
    artist: "KETTAMA",
    album: "Fallen Angel",
    id: "67zHx368N96FXQrz0iXzWO?si=848191a4827f406f",
  },
  {
    name: "Sugar",
    artist: "Kincaid",
    album: "Sugar",
    id: "3WVYDLSVgs1mnUsGeI0ezM?si=4c33150389774dfd",
  },
];

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const search = () => {
    setSearchResults(TRACKS)
  }

  return (
    <div className="App">
      <SearchBar onSearch={search}/>
      <SearchResults searchResults={searchResults} />
      <PlayList />
    </div>
  );
}

export default App;
