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
  const [isSaving, setIsSaving] = useState(false);

  const search = () => {
    const trackNotInPlayList = (track) => {
      return !playListTracks.some(
        (playListTrack) => playListTrack.id === track.id
      );
    };
    if (searchTerm !== "") {
      Spotify.search(searchTerm).then((spotifySearchResults) => {
        let newSearchResults = spotifySearchResults.filter(trackNotInPlayList);
        setSearchResults(newSearchResults);
      });
    }
  };

  const addTrack = (track) => {
    if (!playListTracks.some((currentTrack) => currentTrack.id === track.id)) {
      // If track isn't in Playlist, add track to playlist
      setPlayListTracks((prevTracks) => {
        const newTrackList = [...prevTracks, track];
        localStorage.setItem("playlist", JSON.stringify(newTrackList));
        return newTrackList;
      });
    }

    ///Remove track from searchresults
    setSearchResults(
      searchResults.filter((currentTrack) => currentTrack.id !== track.id)
    );
  };

  const removeTrack = (track) => {
    setPlayListTracks(() => {
      const newTrackList = playListTracks.filter(
        (currentTrack) => currentTrack.id !== track.id
      );
      localStorage.setItem("playlist", JSON.stringify(newTrackList));
      return newTrackList;
    });
    setSearchResults((prevTracks) => [...prevTracks, track]);
  };

  const onSave = () => {
    setIsSaving(true);
    Spotify.savePlaylist(playListName, playListTracks).then(() => {
      setPlayListTracks([]);
      localStorage.setItem("playlist", "[]");
      setIsSaving(false);
    });
  };

  useEffect(() => {
    Spotify.init();
    const newTrackList = JSON.parse(localStorage.getItem("playlist"));
    setPlayListTracks(newTrackList);
  },[]);

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
        isSaving={isSaving}
      />
    </div>
  );
}

export default App;
