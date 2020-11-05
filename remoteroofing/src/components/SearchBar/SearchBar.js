import React from 'react';
import axios from 'axios';


const SearchBar = () => {
    return (
        <div className="searchBar">
            <div className = "homeIconDiv"></div>
            <input type="text" placeholder="Your Address"></input>
            <button>Get Inspection</button>
        </div>
    )
}

export default SearchBar;