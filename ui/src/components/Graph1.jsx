import React from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";

function Graph1(props) {
  return <Bar data={props.userData} options={props}></Bar>;
}

export default Graph1;
