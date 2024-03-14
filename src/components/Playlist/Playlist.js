import "./Playlist.css"
import TrackList from "../TrackList/TrackList";


function Playlist() {
    return (
      <div className="Playlist">
        <input type="text" placeholder="Playlist name..." />
        <TrackList />
        <button>Save To Spotify</button>
      </div>
    );
  }
  
  export default Playlist;