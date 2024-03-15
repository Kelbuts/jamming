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
  const [playListName, setPlayListName] = useState('Playlist Name');
  const [playListTracks, setPlayListTracks] = useState([]);

  const search = () => {
    setSearchResults(TRACKS)
  }

  const setTracks = () => {
    setPlayListTracks(TRACKS)
  }

  const addTrack = (track) => {
    if (playListTracks.some((currentTrack) => currentTrack.id === track.id)) {
      return;
    }
    setPlayListTracks((prevTracks) => [...prevTracks, track]);
  }

  const removeTrack = (track) => {
    setPlayListTracks(playListTracks.filter((currentTrack) => currentTrack.id !== track.id))
  }

  return (
    <div className="App">
      <SearchBar onSearch={search} setTracks={setTracks} />
      <SearchResults searchResults={searchResults} onAdd={addTrack} />
      <PlayList 
        onNameChange={setPlayListName} 
        playListName={playListName} 
        tracks={playListTracks}
        onRemove={removeTrack} />
    </div>
  );
}

export default App;
