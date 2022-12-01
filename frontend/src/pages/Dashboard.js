import Horloge from "../components/horloge";
import Note from "../components/Note";
import Spotify from "../components/Spotify/spotify";
import Plot from "../components/Charts/plot";
import BarChart from "../components/Charts/BarCharts";



const Dashboard = () => {
  return (
    <div>
      <Horloge />
      <Note />
      <Spotify />

      <Plot />
      <BarChart />
    </div>
  );
};

export default Dashboard;
