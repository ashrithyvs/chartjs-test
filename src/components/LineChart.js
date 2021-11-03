import React from "react";
import { Line } from "react-chartjs-2";
import LegendBtn from "./LegendBtn";
import House from "./Vector.svg";

const LineChart = ({ title, subTitle, data }) => {
  const options = {
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };
  return (
    <div className="my-5">
      <h2>{title}</h2>
      <span>{subTitle}</span>
      <div className="Legend d-flex justify-content-end">
        <LegendBtn
          svg={House}
          label="Avail. Sqft"
          color="#0997F2"
          subLabel="Avg. Revenue"
        />
        <LegendBtn
          svg={House}
          label="Avail. Sqft"
          color="#37D159"
          subLabel="Avg. Revenue"
        />
      </div>
      <Line data={data} options={options} />
    </div>
  );
};
export default LineChart;
