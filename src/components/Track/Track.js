import "./Track.css";
import useSound from "use-sound";
import add from "../../sounds/bite.mp3";
import del from "../../sounds/disable-sound.mp3";

function Track(props) {
  const [addPlay] = useSound(add);
  const [delPlay] = useSound(del);
  const addTrack = () => {
    props.onAdd(props.track);
    addPlay();
  };

  const removeTrack = () => {
    props.onRemove(props.track);
    delPlay();
  };

  const renderAction = () => {
    if (props.isRemoval) {
      return <button onClick={removeTrack}>-</button>;
    } else {
      return <button onClick={addTrack}>+</button>;
    }
  };
  return (
    <div className="Track">
      <h3>{props.track.name}</h3>
      <p>
        {props.track.artist} | {props.track.album}
      </p>
      {renderAction()}
    </div>
  );
}

export default Track;
