import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MeteoCinqJourCard from './MeteoCinqJourCard';

const {REACT_APP_API_KEY,REACT_APP_API_CALL_5_DAYS_WEATHER} = process.env

function MeteoCinqJour({coordinates, setLoading, isMeteoCinqJourLoading}) {
    const [weatherData, setWeatherData] = useState([{}]);
    var isLoaded = false;

    useEffect(() => {
        getMeteoCinqJour();
    }, [coordinates])

    const getMeteoCinqJour = async () => {
        let url = REACT_APP_API_CALL_5_DAYS_WEATHER
            .replace('{lat}', coordinates.latitude)
            .replace('{lon}', coordinates.longitude)
            .replace('{API_key}', REACT_APP_API_KEY);
        console.log(url);
        let response = await axios.get(url)
            .then(res => {
                const weather = new Object(res.data);
                setWeatherData(weather);
                console.log(weather);
                setTimeout(() => {
                    setLoading('MeteoCinqJour', false);
                }, 1000);
            })
            .catch(e => {
                console.log(e);
                setLoading('MeteoCinqJour', false);
            });
        isLoaded = true;
    }

    return (
        <div className="widget2">
            {isMeteoCinqJourLoading ? (
                <p className="loader2">Loading 5 day forecast...</p>
                ) : (
                    weatherData && weatherData.list && (
                    weatherData.list.map((weather, index) => (
                        <MeteoCinqJourCard
                            key={index}
                            weather={weather}
                            />
                        ))
                    )
                )
            }
        </div>
    );
}

export default MeteoCinqJour;