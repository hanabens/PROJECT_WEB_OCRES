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
    <div className="widget_meteo">
      <div className="Meteo">
        <header className="Meteo-header">
          <div className="titre_meteo"> METEO </div>
          {/* Recherche de la ville */}
          <div>
            <input
              className="formulaire_meteo"
              type="text"
              placeholder="Entrer une ville"
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="bouton_recherche" onClick={searchPressed}> Recherche </button>
          </div>
          <div className="paragraphe recherche">
            {weather ? <div className="Lieu"> Lieu : {weather.name}</div> : <p>{error}</p>}
            {/* TEMPERATURE  */}
            {weather ? <div className="Temperature">Température : {weather.main.temp}K</div> : <p>{error}</p>}
            {/* CONDITIONS METEO */}
          </div>

          {weather ? (
            <div className="actu_prev">
              <div className="Actuellement"> Actuellement : </div> <p>{weather.weather[0].main}</p>
              <div className="Previsions"> Prévisions : </div> <p>{weather.weather[0].description}</p>{" "}
            </div>
          ) : (
            <p>{error}</p>
          )}
        </header>
      </div>
    </div>
  );
}

export default Meteo;
