import './SearchBar.css';


function SearchBar() {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search title..." />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;