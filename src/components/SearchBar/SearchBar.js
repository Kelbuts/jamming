import './SearchBar.css';


function SearchBar(props) {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search title..." onChange={props.onSearch}/>
      <button onClick={props.setTracks}>Search</button>
    </div>
  );
}

export default SearchBar;