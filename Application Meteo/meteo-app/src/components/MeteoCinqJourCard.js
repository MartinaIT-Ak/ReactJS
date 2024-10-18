import React, { useState } from 'react';


function MeteoCinqJourCard({weather, location}) {
    const options = {
        month: "numeric",
        day: "numeric", 
        hour: "numeric",
        minute: "numeric"
    };
    const dateTimeFormat = new Intl.DateTimeFormat("fr-FR", options);

    function getDate() {
        const date = dateTimeFormat.format(new Date(weather.dt_txt));
        return date;
    }

    return(
        <div>
            <article className="widget2card">
                <div>
                    <span className="date2">{getDate()}</span>
                </div>
                <div className="weatherIcon2"><img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}/></div>
                <div className="weatherInfo2Temp">
                    <div>
                        <div className="temperature2">
                            <span>
                                {Math.floor(weather.main.temp)}&deg;
                            </span>
                        </div>
                    </div>
                </div>
                <div className='weatherInfo2'>
                    <div className="description2">
                        <div className="weatherCondition2">{weather.weather[0].description}</div>
                    </div>
                </div>
                
            </article>
        </div>
    )
}

export default MeteoCinqJourCard;