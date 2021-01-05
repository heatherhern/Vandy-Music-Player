import React from "react";
import "./search.css";

function Search(props) {
    return (
        <input
        type="text"
            // onChange={props.handleInputChange}
            placeholder="Search by Artist, Album, or Song"
        ></input>
    );
}

export default Search;