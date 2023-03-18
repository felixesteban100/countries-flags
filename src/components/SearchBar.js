import React, { useEffect } from 'react'
// import '../App.css'

function SearchBar({theme, search, countryName, getRegion, setCurrentPage}) {

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === "Enter") {
        setCurrentPage(0)
        search()
      }
    })
  }, [setCurrentPage, search])

  return (
    <div>
        <div 
          className={`
            ${theme === "light" ? "bg-slate-200 text-black" : "bg-gray-700 text-white"}
            flex flex-col md:flex-row justify-between align-middle gap-5 md:gap-2 
            p-5 sm:pl-[15vw] lg:pl-[10vw] md:pl-[10vw] xl:pl-[15vw] sm:pr-[15vw] lg:pr-[10vw] md:pr-[10vw] xl:pr-[15vw]
          `}
        >
          <div className={`flex md:w-[50%]`}>
            <input 
              className={`
                ${theme === "light" ? "text-black" : "bg-gray-900 text-white"}
                 border-white p-2 w-full
              `}
              ref={countryName} 
              type="text" 
              placeholder='Enter country name...' 
            />
            <button className={`p-2 ${theme === "light" ? "text-black bg-white" : "bg-gray-900 text-white"} hover:bg-blue-500 hover:text-white `} onClick={() => search()}>
              Search
            </button>
          </div>

          <select 
            className={`
              ${theme === "light" ? "text-black" : "bg-gray-900 text-white"} flex p-3 border-none
            `} 
            name="" 
            id="" 
            onChange={(event) => {
              getRegion(event)
              setCurrentPage(0)
            }} 
            placeholder="Filter by region"
          >
            <option value="All">All regions</option>
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