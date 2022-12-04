import "./charts.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// on a besoin de faire passer nos données
const data = {
  labels: ["Red", "Blue", "Green", "Violet", "Orange", "Yellow"],
  datasets: [
    // intitulé du graphique
    {
      label: "Couleurs préférées des Français",
      data: ["22", "33", "44", "32", "1", "67"],
      backgroundColor: ["Red", "Blue", "Green", "Violet", "Orange", "Yellow"],
    },
  ],
};

function Plot() {
  return (
    <div className="widget_graphique">
      <div className="Chart">
        <div className="container">
          <div className="card">
            <Line data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plot;
