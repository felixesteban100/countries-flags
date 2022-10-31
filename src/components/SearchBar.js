import React from 'react'
import '../App.css'

function SearchBar(props) {
  const searchLogo = props.theme === "light" ?
  "https://cdn-icons-png.flaticon.com/512/54/54481.png"
    :
  "https://cdn-icons-png.flaticon.com/512/954/954591.png"
  
  
  return (
    <div>
        <div className='search-component'>
          <div className='searchBar-div'>
            <input ref={props.countryName} type="text" placeholder='Search for a country...' className='search-bar'/>
            <button className='search-button' onClick={() => props.search()}><img src={searchLogo} alt="" className='search-logo'/></button>
          </div>
          {/* <div><img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" alt="" className='search-logo'/></div> */}

          <select name="" id="" className='filter-bar' onChange={(event) => props.getRegion(event)} placeholder="Filter by region">
            <option value="">Filter by region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        {/* put a dropdown menu for filter the countries */}
        </div>
    </div>
  )
}

export default SearchBar