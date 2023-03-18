import React from 'react';
// import { ComposableMap, Geographies, Geography, Annotation, /* ZoomableGroup */} from "react-simple-maps";
// import Map/* , {Marker}  */from 'react-map-gl';


function CardInfo({country, theme}) {

    // const API_KEY = "czzCHnBsnuJ2hTNCPUox" 

    // const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

    // const token = "pk.eyJ1IjoiZmVsaXhlc3RlYmFuMTAwIiwiYSI6ImNsMWZqOWJjajAxYmczam50NmE0cHg2ZGwifQ.hBcYgEEg_6YUZtCXLRBShA"

    return (
        <div
            className={`
                ${theme === "light" ? "bg-slate-200 text-black" : "bg-gray-700 text-white"}
                p-5 sm:pl-[15vw] lg:pl-[10vw] md:pl-[10vw] xl:pl-[15vw] sm:pr-[15vw] lg:pr-[10vw] md:pr-[10vw] xl:pr-[15vw]
            `}
        >
            {
                country.map((current, index) => {
                    return (
                        <div 
                            className={`flex flex-col`}
                            key={index}
                        >
                            <p 
                                className={`text-5xl text-center m-5`}>{current.name.official}
                            </p>
                            <img className={`w-[80%] self-center`} src={current.flags.png} alt="flag"  />
                            {
                                current.coatOfArms.png !== undefined ?
                                <img className={`w-[50%] self-center mb-10 mt-7`} src={current.coatOfArms.png} alt="shield" />
                                :
                                null
                            }

                            <div 
                                className={`
                                    ${theme === "light" ? "bg-gray-400" : "bg-gray-900 text-white"}
                                        text-center text-2xl
                                        pt-5 pb-5 rounded-lg
                                    `}
                                >
                                {current.name.common && <p><span className='font-bold'>Native Name:</span> {current.name.common}</p>}
                                {current.population && <p><span className='font-bold'>Population:</span> {current.population}</p>}
                                {current.region && <p><span className='font-bold'>Region:</span> {current.region}</p>}
                                <p><span className='font-bold'>Sub region:</span> {current.subregion}</p>
                                <p><span className='font-bold'>Capital:</span> {current.capital}</p>
                                <p><span className='font-bold'>Area:</span> {current.area}</p>
                                <p><span className='font-bold'>Start Of Week:</span> {current.startOfWeek}</p>
                                <p><span className='font-bold'>Status:</span> {current.status}</p>
                                <p><span className='font-bold'>Top Level Domain:</span>{current.tld}</p>
                                <p><span className='font-bold'>Currencies: </span>{current.currencies}</p>
                                <p><span className='font-bold'>Languages: </span>{current.languages}</p>
                                <p><span className='font-bold'>Borders countries: </span>{current.borders}</p>
                                <p><span className='font-bold'>Timezones: </span>{current?.timezones}</p>
                                {/* <p className='cardInfo-text'><span className='cardInfo-topic'>Map Link(Google Maps):</span> {current.maps.googleMaps}</p> */}
                                {/* <p className='cardInfo-text'><span className='cardInfo-topic'>Map Link(Open Street Maps):</span> {current.maps.openStreetMaps}</p> */}
                                {/* <p>{current.latlng[0]}</p> */}
                                {/* <p>{current.latlng[1]}</p> */}

                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardInfo

//<div className=''>
                                    //<Map
                                      //  mapboxAccessToken="pk.eyJ1IjoiZmVsaXhlc3RlYmFuMTAwIiwiYSI6ImNsMWZqOWJjajAxYmczam50NmE0cHg2ZGwifQ.hBcYgEEg_6YUZtCXLRBShA"
                                        // mapboxAccessToken="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZmVsaXhlc3RlYmFuMTAwIiwiYSI6ImNsMWZqOWJjajAxYmczam50NmE0cHg2ZGwifQ.hBcYgEEg_6YUZtCXLRBShA"
                                        //initialViewState={{
                                          //  longitude: current.latlng[1],
                                            //latitude: current.latlng[0],
                                            //zoom: 5
                                        //}}
                                        //style={{width: "100%", height: "100%"}}
                                        //mapStyle="mapbox://styles/mapbox/streets-v9"

                                   // >
                                        // <Marker 
                                        //     longitude={current.latlng[1]}
                                        //     latitude={current.latlng[0]}
                                        // /> 
                                    //</Map>
                                //</div>
                                
                                //  maybe use these or one of these: 
                                //     https://www.digitalocean.com/community/tutorials/how-to-integrate-the-google-maps-api-into-react-applications
                                //     https://giuliacajati.medium.com/all-about-openstreetmap-using-react-js-c24fd0856aca
                                