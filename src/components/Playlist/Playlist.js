import "./Playlist.css";
import TrackList from "../TrackList/TrackList";

function Playlist(props) {
  const handleNameChange = (event) => {
    props.onNameChange(event.target.value);
  };
  const isRemoval = true;

  return (
    <div className="Playlist">
      <input
        onChange={handleNameChange}
        defaultValue={props.playListName}
        type="text"
        placeholder="Playlist name..."
      />
      <TrackList
        tracks={props.tracks}
        isRemoval={isRemoval}
        onRemove={props.onRemove}
      />
      <button onClick={props.onSave}>Save To Spotify {props.playListName}</button>
    </div>
  );
}

export default Playlist;
