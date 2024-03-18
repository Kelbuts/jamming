import "./SearchBar.css";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function SearchBar(props) {
  const onSearchTermUpdate = (event) => {
    props.onSearchTermUpdate(event.target.value)
  }
  return (
    <div className="SearchBar">
      <TextField
        color="success"
        label="Search title..."
        variant="filled"
        onChange={onSearchTermUpdate}
      />
      <Button variant="outlined" color="success" onClick={props.onSearchButton}>
        SEARCH
      </Button>
    </div>
  );
}

export default SearchBar;
