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
function LineChart(props) {
  const data = props.data;
  const options = props.options;
  /*  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "seen  in 2023",
        data: [20, 30, 40, 50, 10],
        borderColor: ["rgba(255,0,0,0.9)"],
        pointBorderColor: ["rgba(255,206,86,0.5)"],
        pointBackgroundColor: ["rgba(0,0,0,1)"],
      },
      {
        label: " opened in 2023",
        data: [11, 24, 31, 18, 5],
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
        text: "click through rate",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "months",
        },
      },
      y: {
        title: {
          display: true,
          text: "(in Millions)",
        },
        ticks: {
          min: 0,
          max: 80,
          stepSize: 4,
        },
      },
    },
  }; */
  return <Line data={data} options={options} />;
}

export default LineChart;
