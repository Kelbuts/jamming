import "./App.css";
import React, { useState, useEffect } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playListName, setPlayListName] = useState("Playlist Name");
  const [playListTracks, setPlayListTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const search = () => {
    
    if (searchTerm != "") {
      
      Spotify.search(searchTerm).then(setSearchResults);
    }
  };

  const addTrack = (track) => {
    if (playListTracks.some((currentTrack) => currentTrack.id === track.id)) {
      return;
    }
    setPlayListTracks((prevTracks) => [...prevTracks, track]);
  };

  const removeTrack = (track) => {
    setPlayListTracks(
      playListTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  };

  const onSave = () => {
    Spotify.savePlaylist(playListName, playListTracks).then(() => {
      setPlayListTracks([]);
    });
  };

  useEffect(() => {
    Spotify.init();
  });

  return (
    <div className="App">
      <SearchBar onSearchButton={search} onSearchTermUpdate={setSearchTerm} />
      <SearchResults searchResults={searchResults} onAdd={addTrack} />
      <PlayList
        onNameChange={setPlayListName}
        playListName={playListName}
        tracks={playListTracks}
        onRemove={removeTrack}
        onSave={onSave}
      />
    </div>
  );
}

export default App;
