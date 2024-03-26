import "./App.css";
import React, { useState } from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

const TRACKS = [
  {
    name: "Relic",
    artist: "Vice State",
    album: "Relic",
    id: "3toHaLUlHzXqoduPCDVQZp",
  },
  {
    name: "Fallen Angel",
    artist: "KETTAMA",
    album: "Fallen Angel",
    id: "67zHx368N96FXQrz0iXzWO",
  },
  {
    name: "Sugar",
    artist: "Kincaid",
    album: "Sugar",
    id: "3WVYDLSVgs1mnUsGeI0ezM",
  },
];

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playListName, setPlayListName] = useState("Playlist Name");
  const [playListTracks, setPlayListTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const search = () => {
    Spotify.search(searchTerm).then(setSearchResults);
  };

  const setTracks = () => {
    setPlayListTracks(TRACKS);
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
      setPlayListTracks([])
    });
  };

  return (
    <div className="App">
      <SearchBar
        onSearchButton={search}
        setTracks={setTracks}
        onSearchTermUpdate={setSearchTerm}
      />
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
