import Horloge from "../components/horloge";
import Note from "../components/Note";
import Spotify from "../components/Spotify/spotify";
import Plot from "../components/Charts/plot";
import BarChart from "../components/Charts/BarCharts";
import Meteo from "../components/Meteo/meteo";

const Dashboard = () => {
  return (
    <div>
      <Horloge />
      <Note />
      <Spotify />
      <Plot />
      <BarChart />
      <Meteo />
    </div>
  );
};

export default Dashboard;
