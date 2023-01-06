import React from 'react'
import '../App.css'

function Card(props) {
    return (
        <div>
            <div className='cards-container'>
                {
                    props.countries.map((current, index) => {
                        return (
                            <div key={index} className='card' onClick={() => props.selectCountry(current.name.official)}>
                                <img src={current.flags.png} alt="" className='card-img'/>
                                <div className='card-info'>
                                    <p className='card-country-name'>{current.name.official}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Card