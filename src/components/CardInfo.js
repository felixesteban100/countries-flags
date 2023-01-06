import React from 'react';
// import { ComposableMap, Geographies, Geography, Annotation, /* ZoomableGroup */} from "react-simple-maps";
import Map, {Marker} from 'react-map-gl';


function CardInfo({getBack, backImg, backImgstyle, country}) {

    // const API_KEY = "czzCHnBsnuJ2hTNCPUox" 

    // const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

    const token = "pk.eyJ1IjoiZmVsaXhlc3RlYmFuMTAwIiwiYSI6ImNsMWZqOWJjajAxYmczam50NmE0cHg2ZGwifQ.hBcYgEEg_6YUZtCXLRBShA"

    return (
        <div>
            <div className='back-button' onClick={getBack}>
                <img src={backImg} alt="" className={backImgstyle}/>
                <span>Back</span>
            </div>
            {
                country.map((current, index) => {
                    return (
                        <div key={index} className='cardInfo-container'>
                            <div className='cardInfo-imgs'>
                                <img className='cardInfo-img' src={current.flags.png} alt=""  />
                                <img className='cardInfo-country-shield' src={current.coatOfArms.png} alt="" />
                            </div>
                            <p className='cardInfo-title'>{current.name.official}</p>
                            <div className='cardInfo-info'>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Native Name:</span> {current.name.common}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Population:</span> {current.population}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Region:</span> {current.region}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Sub region:</span> {current.subregion}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Capital:</span> {current.capital}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Area:</span> {current.area}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Start Of Week:</span> {current.startOfWeek}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Status:</span> {current.status}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Top Level Domain:</span>{current.tld}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Currencies: </span>{current.currencies}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Languages: </span>{current.languages}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Borders countries: </span>{current.borders}</p>
                                <p className='cardInfo-text'><span className='cardInfo-topic'>Timezones: </span>{current?.timezones}</p>
                                {/* <p className='cardInfo-text'><span className='cardInfo-topic'>Map Link(Google Maps):</span> {current.maps.googleMaps}</p> */}
                                {/* <p className='cardInfo-text'><span className='cardInfo-topic'>Map Link(Open Street Maps):</span> {current.maps.openStreetMaps}</p> */}
                                {/* <p>{current.latlng[0]}</p> */}
                                {/* <p>{current.latlng[1]}</p> */}

                                <div className='cardInfo-map'>
                                <Map
                                    mapboxAccessToken={token}
                                    initialViewState={{
                                        longitude: current.latlng[1],
                                        latitude: current.latlng[0],
                                        zoom: 5
                                    }}
                                    style={{width: "100%", height: "100%"}}
                                    mapStyle="mapbox://styles/mapbox/streets-v9"

                                >
                                    {/* <Marker 
                                        longitude={current.latlng[1]}
                                        latitude={current.latlng[0]}
                                    /> */}
                                </Map>
                                </div>
                                {/* maybe use these or one of these: 
                                    https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications
                                    https://giuliacajati.medium.com/all-about-openstreetmap-using-react-js-c24fd0856aca
                                */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardInfo