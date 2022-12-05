import "./charts.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

// on a besoin de faire passer nos données
const data = {
  labels: ["Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"],
  datasets: [
    // intitulé du graphique
    {
      label: "Nombre d'ecoute par mois en million",
      data: ["42", "41", "40", "39.5", "42", "39"],
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
