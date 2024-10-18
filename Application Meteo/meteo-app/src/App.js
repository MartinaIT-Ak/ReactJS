import logo from './logo.svg';
import './App.css';
import MeteoDuJour from './components/MeteoDuJour';
import MeteoCinqJour from './components/MeteoCinqJour';
import ChoisirVille from './components/ChoisirVille';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const {REACT_APP_API_KEY, REACT_APP_API_CALL_GEOCODING} = process.env

function App() {
  const [isMeteoDuJourLoading, setIsMeteoDuJourLoading] = useState(true);
  const [isMeteoCinqJourLoading, setIsMeteoCinqJourLoading ] = useState(true);

  function toggleLoading (component = '', trueFalse) {
    if (component == '' || component == 'MeteoDuJour') setIsMeteoDuJourLoading(trueFalse);
    if (component == '' || component == 'MeteoCinqJour') setIsMeteoCinqJourLoading(trueFalse);
  }

  const [userLocation, setUserLocation] = useState({
    latitude: 45.750000,
    longitude: 4.850000
  });

  useEffect(()=> {
    getUserLocation();
  }, []);

  function getUserLocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          console.log(userLocation);
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  function setCoordinatesByInput (town) {
    let url = REACT_APP_API_CALL_GEOCODING
      .replace('{city_name}', town)
      .replace('{API_key}', REACT_APP_API_KEY);
    console.log(url);
    let response = axios.get(url)
      .then(res => {
          const result = new Object(res.data);
          setUserLocation({
            latitude: result[0].lat,
            longitude: result[0].lon
          })
          console.log(userLocation);
      })
      .catch(e => {
          alert(`On n'a pas trouvé cette ville: ${town}, veuillez re essayer`);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="Header-text">
          <p>
            Prévision météo
          </p>
          <a
            className="App-link"
            href="https://openweathermap.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit OpenWeather
          </a>
        </div>
      </header>
        <ChoisirVille
          setCoordinatesByInput={setCoordinatesByInput}
          getUserLocation={getUserLocation}
          setLoading={toggleLoading}/>
        <MeteoDuJour
          coordinates={userLocation}
          setLoading={toggleLoading}
          isMeteoDuJourLoading={isMeteoDuJourLoading}/>
        <MeteoCinqJour
          coordinates={userLocation}
          setLoading={toggleLoading}
          isMeteoCinqJourLoading={isMeteoCinqJourLoading}/>
    </div>
  );
}

export default App;
