import React, { useEffect, useState } from "react";
import axios from "axios";
import './spotify.css';

const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("acces_token")) {
      setToken(localStorage.getItem("acess_token"));
    }
  }, []);

  const handleGetPlaylists = () => {
    axios.get("https");
  };

  return <button className="playlist">Playlist </button>;
};

export default SpotifyGetPlaylists;
