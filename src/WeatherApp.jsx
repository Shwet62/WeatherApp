import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const updateInfo = (result) => {
    console.log(result);
    setWeatherInfo(result);
  };

  return (
    <div className="WeatherApp">
      <header className="appHeader">
        <h1>Weather App</h1>
        <p>Get the latest weather updates for any city!</p>
      </header>
      <main>
        <SearchBox updateInfo={updateInfo} />
        {weatherInfo ? (
          <InfoBox info={weatherInfo} />
        ) : (
          <div className="placeholder">
            <p>Start by searching for a city to view its weather information.</p>
          </div>
        )}
      </main>
      <footer className="appFooter">
        <p>Created by <strong>Shwet Kumar</strong></p>
      </footer>
    </div>
  );
}
