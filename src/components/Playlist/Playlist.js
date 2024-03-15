import "./Playlist.css"
import TrackList from "../TrackList/TrackList";



function Playlist(props) {
    const handleNameChange = (event) =>{
      props.onNameChange(event.target.value)
    }

    return (
      <div className="Playlist">
        <input 
          onChange={handleNameChange} 
          defaultValue={props.playListName} 
          type="text" 
          placeholder="Playlist name..." />
        <TrackList tracks={props.tracks} />
        <button>Save To Spotify {props.playListName}</button>
      </div>
    );
  }
  
  export default Playlist;