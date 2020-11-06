import React from 'react'
import axios from 'axios'
import './SearchBar.css'

const SearchBar = () => {
  return (
    <form>
      <div className='searchBar'>
        <div className="inputDiv">
            <div className='homeIconDiv'>
          <img
            src='https://uploads-ssl.webflow.com/5f127ac8860f158e650f06b5/5f5a6d20aa3c71469c732751_blue-home-pin.png'
            alt='enter your address for free roof inspection'
            className="homeIconImg"
          ></img>
        </div>
        <div>
          <input
            type='text'
            placeholder='Your Address'
            className='textInput'
            maxLength="256"
          ></input>
        </div>
        </div>
        
        <input
          type='submit'
          value='Get Inspection'
          className='submitButton'
        ></input>
      </div>
    </form>
  )
}

export default SearchBar
