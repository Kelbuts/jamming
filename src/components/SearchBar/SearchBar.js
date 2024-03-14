import './SearchBar.css';


function SearchBar(props) {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search title..." onChange={props.onSearch}/>
      <button>Search</button>
    </div>
  );
}

export default SearchBar;