import React from "react";
import "./meteo.css";
import { useState } from "react";
import axios from "axios";

const api = {
  key: process.env.REACT_APP_KEY,
  base: process.env.REACT_APP_BASE,
};

function Meteo() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const searchPressed = async () => {
    const response = await axios.get(
      `${api.base}weather?q=${search}&nits=metric&APPID=${api.key}`
    );

    if (response.status === 200) {
      setWeather(response.data);
      console.log(weather);
    } else {
      setError(response);
    }
  };

  return (
    <div className="Meteo">
      <header className="Meteo-header">
        <h1> METEO </h1>
        {/* SEARCH BOXE */}
        <div>
          <input
            type="text"
            placeholder="Entrer une ville"
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={searchPressed}> Reherche </button>
        </div>
        {weather ? <p>location: {weather.name}</p> : <p>{error}</p>}
        {/* TEMPERATURE  */}
        {weather ? <p> {weather.main.temp}°F</p> : <p>{error}</p>}
        {/* CONDITIONS METEO */}

        {weather ? (
          <div>
            <p> {weather.weather[0].main}</p>
            <p> {weather.weather[0].description}</p>{" "}
          </div>
        ) : (
          <p>{error}</p>
        )}
      </header>
    </div>
  );
}

export default Meteo;
