import Horloge from "../components/horloge";
import Note from "../components/Note";
import Spotify from "../components/Spotify/spotify";
import Plot from "../components/Charts/plot";

const Dashboard = () => {
  return (
    <div>
      <Horloge />
      <Note />
      <Spotify />
      <Plot />
    </div>
  );
};

export default Dashboard;
