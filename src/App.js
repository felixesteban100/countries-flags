import React, {useState} from 'react';
import { useQuery } from 'react-query'
import axios from 'axios';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Card from './components/Card';
import CardInfo from './components/CardInfo';
import './App.css';

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState([])
  const [theme, setTheme] = useState('dark')

  const {/* isLoading, error, */ data: allCountries /*, refetch: refetchAllCountries */} = useQuery("getting all countries", async () => {
    return await axios.get('https://restcountries.com/v3.1/all')
    .then(data => {
      getThemeSaved()
      setCountries(data.data)
      return organizeData(data.data)
    })
  })

  let countryName  = React.useRef("")

  const backImg = theme === "light" ? "https://cdn-icons-png.flaticon.com/512/271/271218.png" :"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik00MC4wMjEzNSw1MS41NDQwMWMtMS40ODk1MSwwLjA0NDM4IC0yLjkwMzI0LDAuNjY2OSAtMy45NDE2NywxLjczNTY4bC0yOC4xNjI3NiwyOC4xNjI3NmMtMS40MTkxOCwxLjA4MTU0IC0yLjI1Mzk4LDIuNzYyMTEgLTIuMjU4MzcsNC41NDY0M2MtMC4wMDQzOSwxLjc4NDMxIDAuODIyMTMsMy40Njg5OCAyLjIzNTk3LDQuNTU3NDhjMC4wMTExNywwLjAwNzUgMC4wMjIzNywwLjAxNDk3IDAuMDMzNTksMC4wMjIzOWwyOC4xNTE1NiwyOC4xNTE1NmMxLjQzODAyLDEuNDk3NzYgMy41NzMzOSwyLjEwMTEgNS41ODI1OCwxLjU3NzMyYzIuMDA5MTksLTAuNTIzNzggMy41NzgyNCwtMi4wOTI4MyA0LjEwMjAyLC00LjEwMjAyYzAuNTIzNzgsLTIuMDA5MTkgLTAuMDc5NTUsLTQuMTQ0NTYgLTEuNTc3MzEsLTUuNTgyNThsLTE4Ljg3OTY5LC0xOC44Nzk2OWgxMzUuMjI2MDRjMi4wNjc2NSwwLjAyOTI0IDMuOTkwODcsLTEuMDU3MDkgNS4wMzMyMiwtMi44NDNjMS4wNDIzNiwtMS43ODU5MiAxLjA0MjM2LC0zLjk5NDc0IDAsLTUuNzgwNjZjLTEuMDQyMzYsLTEuNzg1OTIgLTIuOTY1NTgsLTIuODcyMjUgLTUuMDMzMjIsLTIuODQzaC0xMzUuMjI2MDRsMTguODc5NjksLTE4Ljg3OTY5YzEuNjk1NjksLTEuNjQ4MjggMi4yMDU1NSwtNC4xNjg1MSAxLjI4Mzg5LC02LjM0NjNjLTAuOTIxNjYsLTIuMTc3NzkgLTMuMDg1NzYsLTMuNTY2MzggLTUuNDQ5NTEsLTMuNDk2Njd6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="
  
  const backImgstyle = theme === "light" ? "back-img-light" : "back-img-dark"

  function getThemeSaved(){
    let savedTheme = localStorage.getItem("theme")
    if (savedTheme !== null && savedTheme !== undefined) {
      setTheme(savedTheme)
    }
  }

  function organizeData(data){
    return data.map((current) => {

      current.population = current.population.toLocaleString()

      current.startOfWeek = current.startOfWeek[0].toUpperCase() + current.startOfWeek.slice(1)

      current.continents = current.continents.reduce((accumulator, current) => `${accumulator}, ${current}`)
        
      current.currencies = current.currencies ?? ["None"]
      current.currencies = Object.values(current.currencies).map((current) => current.name)
      current.currencies = current.currencies.reduce((accumulator, current) => `${accumulator}, ${current}`)

      current.languages = current.languages ?? ["None"]
      current.languages = Object.values(current.languages).reduce((accumulator, current) => `${accumulator}, ${current}`)

      current.borders = current.borders ?? ["None"]
      current.borders = Object.values(current.borders).reduce((accumulator, current) => `${accumulator}, ${current}`)

      current.borders = current.borders ?? ["None"]
      current.timezones = Object.values(current.timezones).reduce((accumulator, current) => `${accumulator}, ${current}`)
      return current
    })
  }

  function getRegion(event){
    switch(event.target.value){
      case "All":
        setCountries(allCountries)
      break;

      default:
        fetch(`https://restcountries.com/v3.1/region/${event.target.value}`)
        .then(res => res.json())
        .then(data => setCountries(organizeData(data)))
      break;
    }
  }

  function changeTheme(){
    let actualTheme = theme === "light" ? "dark" : "light"
    setTheme(actualTheme)
    localStorage.setItem("theme", actualTheme)
    
  }

  function search(){
    if(countryName.current !== "" && countryName.current !== null){
      let name = countryName.current.value.toLowerCase()
      
      // const info = allCountries.filter(current => {
      //   let currentName = current.name.official.toLowerCase()
      //   return currentName.includes(name) && current
      // })

      const info = allCountries.filter(current => current.name.official.toLowerCase().includes(name))
      
      if(info.length > 0){
        setCountries(info)
      }
    }
  }

  function selectCountry(name){
    let selected = countries.filter(current => current.name.official === name)
    setCountry(selected)
    goToTop()
  }

  function getBack(){
    setCountry([])
    countryName = ""
  }

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  return (
      <div className={`App-${theme}`}>
        <div className='page'>
          <Navbar 
            changeTheme={changeTheme}
            theme={theme}
          />
          {(country.length === 0) ? 
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
                <CardInfo
                  getBack={getBack}
                  backImg={backImg}
                  backImgstyle={backImgstyle}
                  country={country}
                />
              </div>
            </div>
          }
        </div>
      </div>
  );
}

export default App;
