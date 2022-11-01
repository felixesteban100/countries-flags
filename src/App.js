import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Card from './components/Card';

function App() {
  const [countries, setCountries] = React.useState([])
  const [country, setCountry] = React.useState([])
  const [region, setRegion] = React.useState("")
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {
    if (region !== "") {
      fetch(`https://restcountries.com/v3.1/region/${region}`)
      .then(res => res.json())
      .then(data => getCountries(data))
    }else{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => getCountries(data))
    }
  }, [region])


  function getCountries(data){
    setCountries(data)
  }

  function getRegion(event){
    event.preventDefault()
    setRegion(event.target.value)
  }

  function changeTheme(){
    setTheme(prevValue => {
      return prevValue === "light" ? "dark" : "light"
    })
  }

  let countryName  = React.useRef("")

  function search(){
    console.log(countryName)
    if(countryName.current !== "" && countryName.current !== null){
      let name = countryName.current.value.toLowerCase()
      const info = countries.filter(current => {
        let currentName = current.name.common.toLowerCase()
        // console.log(currentName)
        return currentName.includes(name) && current
      })
      console.log("ok", info)
      
      if(info.length > 0 && info.length !== 250){
        setCountry(info)
      }
    }
  }

  function selectCountry(name){
    let selected = countries.filter(current => current.name.official === name)
    setCountry(selected)
  }

  function getBack(){
    setCountry([])
    setRegion("")
    countryName = ""
  }

  const backImg = theme === "light" ? 
  "https://cdn-icons-png.flaticon.com/512/271/271218.png" 
  :
  "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik00MC4wMjEzNSw1MS41NDQwMWMtMS40ODk1MSwwLjA0NDM4IC0yLjkwMzI0LDAuNjY2OSAtMy45NDE2NywxLjczNTY4bC0yOC4xNjI3NiwyOC4xNjI3NmMtMS40MTkxOCwxLjA4MTU0IC0yLjI1Mzk4LDIuNzYyMTEgLTIuMjU4MzcsNC41NDY0M2MtMC4wMDQzOSwxLjc4NDMxIDAuODIyMTMsMy40Njg5OCAyLjIzNTk3LDQuNTU3NDhjMC4wMTExNywwLjAwNzUgMC4wMjIzNywwLjAxNDk3IDAuMDMzNTksMC4wMjIzOWwyOC4xNTE1NiwyOC4xNTE1NmMxLjQzODAyLDEuNDk3NzYgMy41NzMzOSwyLjEwMTEgNS41ODI1OCwxLjU3NzMyYzIuMDA5MTksLTAuNTIzNzggMy41NzgyNCwtMi4wOTI4MyA0LjEwMjAyLC00LjEwMjAyYzAuNTIzNzgsLTIuMDA5MTkgLTAuMDc5NTUsLTQuMTQ0NTYgLTEuNTc3MzEsLTUuNTgyNThsLTE4Ljg3OTY5LC0xOC44Nzk2OWgxMzUuMjI2MDRjMi4wNjc2NSwwLjAyOTI0IDMuOTkwODcsLTEuMDU3MDkgNS4wMzMyMiwtMi44NDNjMS4wNDIzNiwtMS43ODU5MiAxLjA0MjM2LC0zLjk5NDc0IDAsLTUuNzgwNjZjLTEuMDQyMzYsLTEuNzg1OTIgLTIuOTY1NTgsLTIuODcyMjUgLTUuMDMzMjIsLTIuODQzaC0xMzUuMjI2MDRsMTguODc5NjksLTE4Ljg3OTY5YzEuNjk1NjksLTEuNjQ4MjggMi4yMDU1NSwtNC4xNjg1MSAxLjI4Mzg5LC02LjM0NjNjLTAuOTIxNjYsLTIuMTc3NzkgLTMuMDg1NzYsLTMuNTY2MzggLTUuNDQ5NTEsLTMuNDk2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
  
  const backImgstyle = theme === "light" ? 
  "back-img-light" 
  :
  "back-img-dark"

  const countryDiv = country.map((current, index) => {
    return (
        <div className='big-card'>
          <img src={current.flags.png} alt="" className='big-card-img' />
          <div className='big-card-info'>
            <h1 className='big-card-title'>{current.name.official}</h1>
            <div className='info-cols'>
              <div className='first-col'>
                <p><strong>Native Name:</strong> {current.name.common}</p>
                <br />
                <p><strong>Population:</strong> {current.population}</p>
                <br />
                <p><strong>Region:</strong> {current.region}</p>
                <br />
                <p><strong>Sub region:</strong> {current.subregion}</p>
                <br />
                <p><strong>Capital:</strong> {current.capital}</p>
                <br />
              </div>
              <div className='second-col'>
                <p><strong>Top Level Domain:</strong>{current.tld}</p>
                <br />
                <p><strong>Currencies:</strong>{Object.keys(current.currencies).map((key1, index1) => {
                  if(index1 === current.currencies[key1].length){
                    return current.currencies[key1].name
                  }else{
                    return current.currencies[key1].name
                  }
                })}</p>
                <br />
                <p><strong>Languages: </strong>{Object.keys(current.languages).map((key1, index1) => {
                  if(index1 === Object.keys(current.languages).length - 1){
                    return `${current.languages[key1]}`
                  }else{
                    return `${current.languages[key1]}, `
                  }
                })}</p>
              </div>
            </div>
            <div className='border-countries'>
              <h4>Border countries:</h4>
              {current.borders !== undefined ? Object.keys(current.borders).map((key1, index1) => {
                  if(index1 < 3){
                    return (<div className='border-country'>{`${current.borders[key1]}`}</div>)
                  }else{
                    // return (<div className='border-country'>{`${current.borders[key1]},`}</div>)
                  }
                  return undefined
                }) 
              :
              <div className='border-country'>None</div>
              }
            </div>
          </div>
        </div>
    )
  })

  // console.log("ok", countryDiv)
  
  return (
    <div className={`App-${theme}`}>
      <div className='page'>
        <Navbar 
          changeTheme={changeTheme}
          theme={theme}
        />
        {country.length === 0 ? 
          <div>
            <SearchBar 
              getRegion={getRegion}
              search={search}
              countryName={countryName}
              theme={theme}
            />
            <Card 
              countries={countries}
              selectCountry={selectCountry}
            />
          </div>  
          :
          <div>
            <div className='big-card-component'>
              <div className='back-button' onClick={getBack}>
                <img src={backImg} alt="" className={backImgstyle}/>
                <span>Back</span>
              </div>
              {countryDiv}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
