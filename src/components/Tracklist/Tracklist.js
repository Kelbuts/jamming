import './TrackList.css';
import Track from '../Track/Track';



function TrackList(props) {
  console.log(props)

    return (
      <div className="TrackList">
        {props.tracks && props.tracks.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
        
          />
        );
      })}
      
      </div>
    );
  }
  
  export default TrackList;