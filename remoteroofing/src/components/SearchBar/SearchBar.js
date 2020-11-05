import React from 'react';
import axios from 'axios';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="searchBar">
            <div className = "homeIconDiv">
                <img src="https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5a6d20aa3c71469c732751_blue-home-pin.png" alt="enter your address for free roof inspection">

                </img>
            </div>
            <input type="text" placeholder="Your Address"></input>
            <button>Get Inspection</button>
        </div>
    )
}

export default SearchBar;