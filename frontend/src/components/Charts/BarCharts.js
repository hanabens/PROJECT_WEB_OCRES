import React from "react";
import { Chart as ChartJS, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement);

const BarChart = () => {
  var data = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],

        backgroundColor: [
          "reba (255, 99, 132, 0.2)",
          "rgba (54, 162, 235, 0.2)",
          "reba (255, 206, 86, 0.2)",
          "reba (75, 192, 192, 0.2)",
          "reba (153, 102, 255, 0.2)",
          "reba (255, 159, 64, 0.2)",
        ],

        borderColor: [
          " reba (255, 99, 132, 1)",
          "rgba (54, 162, 235, 1)",
          "rgba (255, 206, 86, 1)",
          "reba (75, 192, 192, 1)",
          "rgba (153, 102, 255, 1)",
          "reba (255, 159, 64, 1)",
        ],
        borderwidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontsize: 26,
      },
    },
  };

  return (
    <div>
      <Bar data={data} height={400} options={options} />
    </div>
  );
};

export default BarChart;
