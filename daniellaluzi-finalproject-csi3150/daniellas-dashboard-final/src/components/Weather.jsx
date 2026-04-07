
import { useState, useEffect } from 'react';

function Weather() {

    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});


    //fetching the weather api and displaying the weather of a city that was typed in
    useEffect(() => {

        const fetchWeather = async () => {
          try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&APPID=ee0c30e06b473ef5041e43489ad9e8e2`);

            const data = await response.json();
            console.log(data);

            if (search.toLowerCase() !== data.name.toLowerCase()) {
                throw new Error("City not found. Please try again.");
            }

            setWeather(data);

          } catch (error) {
            console.error('Weather fetch failed', error);
            setWeather({});
          }
        };
    
        fetchWeather();
    
      }, [search]);


    return(
            <div className="weatherContainer">
                <div className="weatherSearchandButton">
                    <input className="weatherSearch" type="text" value={search} placeholder="Enter City!"
                    onChange={(e) => setSearch(e.target.value)}/>
                </div>

                {weather.main ? (
                    <div className="weather">
                        <p className="currentWeather">In {weather.name}, it is currently {Math.round(weather.main.temp)}°F and/with {weather.weather[0].main}</p>
                    </div> ) : ( <p className="checkOutWeather">Check out the weather of a city!</p>)}
            </div>

    );
}

export default Weather;