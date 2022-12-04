import Horloge from "../components/horloge";
import Note from "../components/Note";
import Spotify from "../components/Spotify/spotify";
import Plot from "../components/Charts/plot";
import BarChart from "../components/Charts/BarCharts";
import image from "./image.png";



const Dashboard = () => {
  return (
    <div>
      <img className="image" src={image} /> <Note />
      <Spotify />
      <Horloge />
      <Plot />
      <BarChart />
    </div>
  );
};

export default Dashboard;
