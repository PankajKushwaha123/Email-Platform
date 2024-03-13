import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
/* import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js"; */
/* ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineElement
); */
function LineChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "males in 2023",
        data: [2, 3, 4, 5, 1],
        borderColor: ["rgba(255,0,0,0.9)"],
        pointBorderColor: ["rgba(255,206,86,0.5)"],
        pointBackgroundColor: ["rgba(0,0,0,1)"],
      },
      {
        label: "females in 2024",
        data: [9, 8, 5, 3, 19],
        borderColor: ["rgba(200,220,20,0.9)"],
        pointBorderColor: ["rgba(255,206,86,0.2)"],
        pointBackgroundColor: ["rgba(0,0,0,1)"],
      },
    ],
  };
  const options = {
    plugins: {
      title: {
        display: true,
        text: "men to female number",
      },
    },
    scales: {
      y: {
        ticks: {
          min: 0,
          max: 20,
          stepSize: 4,
        },
      },
    },
  };
  return <Line data={data} options={options} />;
}

export default LineChart;
