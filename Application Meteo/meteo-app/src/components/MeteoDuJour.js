import React, { useEffect, useState } from 'react';
import axios from 'axios';

const {REACT_APP_API_KEY,REACT_APP_API_CALL_CURRENT_WEATHER} = process.env

function MeteoDuJour({coordinates, setLoading, isMeteoDuJourLoading}) {
    const options = {
        month: "long",
        day: "numeric"
    };
    const dateTimeFormat = new Intl.DateTimeFormat("fr-FR", options);

    const [weather, setWeather] = useState({});

    useEffect(() => {
        getMeteo();
    }, [coordinates])

    const getMeteo = async () => {
        let url = REACT_APP_API_CALL_CURRENT_WEATHER
            .replace('{lat}', coordinates.latitude)
            .replace('{lon}', coordinates.longitude)
            .replace('{API_key}', REACT_APP_API_KEY);
        console.log(url);
        let response = await axios.get(url)
            .then(res => {
                const weather = new Object(res.data);
                setWeather(weather);
                console.log(weather);
                setTimeout(() => {
                    setLoading('MeteoDuJour', false);
                }, 1000);
            })
            .catch(e => {
                console.log(e);
                setLoading('MeteoDuJour', false);
            });
    }

    return (
        <div className='meteoDuJour'>
            <article className="widget">
            {isMeteoDuJourLoading ? (
                <p className="loader">Loading current weather...</p>
            ) : Object.keys(weather).length ? (
                    <>
                    <div className="weatherIcon"><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/></div>
                    <div className="weatherInfo">
                        <div className='tempDisplay'>
                            <div className="temperature">
                                <span>
                                    {Math.floor(weather.main.temp)}&deg;
                                </span>
                            </div>
                            <div className="realFeel">RealFeel: {Math.floor(weather.main.feels_like)}&deg;</div>
                        </div>
                        <div className="description">
                            <div className="weatherCondition">{weather.weather[0].description}</div>
                            <div className="place">{weather.name}</div>
                        </div>
                        <div className="date">{dateTimeFormat.format(Date.now())}</div>
                    </div>
                    </>
                ) : (
                    <p>No weather reports found!</p>
                    )}
            </article>
        </div>
    );
}

export default MeteoDuJour;