import Horloge from "../components/horloge";
import Note from "../components/Note";
import Spotify from "../components/Spotify/spotify";
import Plot from "../components/Charts/plot";
import image from "./image.png";
import Meteo from "../components/Meteo/meteo";


const Dashboard = () => {
  return (
    <div>
      <img className="image" src={image} /> <Note />
      <Spotify />
      <Horloge />
      <Plot />
      
      <Meteo />
    </div>
  );
};

export default Dashboard;
