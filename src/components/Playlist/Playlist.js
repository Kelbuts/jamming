import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Playlist(props) {
  const handleNameChange = (event) => {
    props.onNameChange(event.target.value);
  };
  const isRemoval = true;

  const drawProgress = () => {
    if (props.isSaving) {
      return (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      );
    }
  };

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
      <button onClick={props.onSave}>
        Save To Spotify {props.playListName}
      </button>
      {drawProgress()}
    </div>
  );
}

export default Playlist;
