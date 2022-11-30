import { useEffect, useState } from "react";
import axios from "axios";
import "./spotify.css";

const PLAYLIST_ENDPOINT = "https://api.spotify.com/v1/me/playlists";
// end point = la fin de l'url ici 'playlist'

const SpotifyGetPlaylists = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState([0]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const handleGetPlaylists = async (e) => {
    e.preventDefault();
    //  empecher l'erreur de base avec e.preventDefault au lieu d'utiliser catch(error)
    const { data } = await axios.get(PLAYLIST_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setData(e.data);
    console.log(data.items[0].name);
  };

  return (
    <div>
      {/* rajoute une div parce que react ne veut renvoyer tjrs qu'un seul element d'un components */}
      <button className="playlist" onClick={handleGetPlaylists}>
        {" "}
        Playlist{" "}
      </button>
      <div>
        {
          data?.items ? (
            data.items.map((item) => <p>{item.name}</p>)
          ) : (
            <h1>Test</h1>
          )
          //   si y'a des data on peut acceder aux items,
          // ici ce que l'on map c'est la liste d'objet item et on va récup que certaines infos
        }
      </div>
    </div>
  );
};

export default SpotifyGetPlaylists;
