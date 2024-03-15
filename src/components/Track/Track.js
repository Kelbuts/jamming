import "./Track.css";

function Track(props) {
  const addTrack = () => {
    props.onAdd(props.track);
  };
  return (
    <div className="Track">
      <h3>{props.track.name}</h3>
      <p>
        {props.track.artist} | {props.track.album}
      </p>
      <button onClick={addTrack}>+</button>
      <button onClick={}>-</button>
    </div>
  );
}

export default Track;
