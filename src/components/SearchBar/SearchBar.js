import "./SearchBar.css";
import * as React from "react";
import {Button,FormGroup, TextField} from "@mui/material";

function SearchBar(props) {
  const onSearchTermUpdate = (event) => {
    console.log("update", event.target.value);
    props.onSearchTermUpdate(event.target.value);
  };

  const onKeyDown = (event) => {
    if(event.key == 'Enter' ) {
      props.onSearchButton();
    }
  }
  
  return (
    <div className="SearchBar">
      <FormGroup row>
        <TextField
          id="search-input"
          color="success"
          label="Search title..."
          variant="outlined"
          onChange={onSearchTermUpdate}
          onKeyDown={onKeyDown}
        />
        <Button
          id="search-btn"
          variant="outlined"
          color="success"
          onClick={props.onSearchButton}
        >
          SEARCH
        </Button>
      </FormGroup>
    </div>
  );
}

export default SearchBar;
