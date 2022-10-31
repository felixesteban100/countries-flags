import React from 'react'
import '../App.css'

function Card(props) {
    const countriesCards = props.countries.map(current => {
        return (
            <div className='card' onClick={() => props.selectCountry(current.name.official)}>
                <img src={current.flags.png} alt="" className='card-img'/>
                <div className='card-info'>
                    <h3>{current.name.official}</h3>
                    <br />
                    <p><strong>Capital:</strong>{current.capital}</p>
                    <br />
                    <p><strong>Region:</strong>{current.region}</p>
                    <br />
                    <p><strong>Population:</strong>{current.population}</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='cards'>
                {countriesCards}
            </div>
        </div>
    )
}

export default Card