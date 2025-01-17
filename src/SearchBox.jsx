import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_KEY = "cee3a1dd20aecf5870020b6b8963d1bc";

  const getWeatherInfo = async () => {
    try {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      let response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("City not found");
      }

      let jsonResponse = await response.json();
      let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
    setError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false);
    } catch (error) {
      setError(true);
      updateInfo(null); // Clear previous weather info
    }
    setCity(""); // Clear the input field
  };

  return (
    <div className="SearchBox">
      <h3>Search For the Weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /> <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p className="error-message">No such place exists</p>}
      </form>
    </div>
  );
}
