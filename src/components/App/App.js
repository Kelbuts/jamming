import './App.css';


import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../Playlist/Playlist'


function App() {
  return (
    <div className="App">
      <SearchBar />
      <SearchResults />
      <PlayList />
    </div>
  );
}

export default App;