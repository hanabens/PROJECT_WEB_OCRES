import { useEffect, useState } from "react";
import "./spotify.css";
import axios from "axios";
import './spotify.css';
import SpotifyGetPlaylists from "./SpotifyGetPlaylists";

function Spotify() {
  const CLIENT_ID = "4758a41c44b8416b81efdb1e1f9a9ff5";
  const REDIRECT_URI = "http://localhost:3000/dashboard";
  const AUTH_ENDPOINT = "http://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    setToken(token);
  }, []);

  const logout = () => {
    setToken(""); /*NE RIEN ECRIRE ICI SINON PLUS DE PROJET ET C LA MIERDA*/
    window.localStorage.removeItem("token");
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });
    setArtists(data.artists.items[0]);
    console.log(artists);
  };

  const renderArtists = () => {
    if (artists.length === 0) {
      return <div>{""}</div>;
    }
    return (
      <div className="PhotoArtiste">
        {artists.images.length ? ( /*IMAGE DE L'ARTISTE */
          <div>
            <img width={"30%"} src={artists.images[0].url} alt="" />
          </div>
        ) : (
          <div>No Image</div>
        )}
        {artists.name}
      </div>
    );
  };

  return (

    <div className="spotify">

      <header className="spotify-header">

        {!token ? (

          //LIEN DE CONNEXION 
          <a className="se_connecter"
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            {" "}
            <button type="submit"> Connexion a Spotify </button>
          </a>

        ) : (

          <button className="bouton_deconnexion" onClick={logout}>Deconnexion</button>
        )}
        {console.log("token", token)}
        {token ? (
          <div>
            <form onSubmit={searchArtists}>
              <input className="formulaire_recherche"
                type="text"
                placeholder="Rechercher un artiste"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <button className="bouton_recherche" type="submit"> Rechercher </button>
              <SpotifyGetPlaylists />
            </form>
            {renderArtists()}
          </div>
        ) : (
          <h2> </h2>
        )}
      </header>
    </div>

  );
}

export default Spotify;
