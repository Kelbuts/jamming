import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

function SearchResults(props) {
  const isRemoval = false;

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        tracks={props.searchResults}
        onAdd={props.onAdd}
        isRemoval={isRemoval}
      />
    </div>
  );
}

export default SearchResults;
