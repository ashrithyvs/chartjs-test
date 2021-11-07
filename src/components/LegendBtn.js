import React from "react";

function LegendBtn({ svg, label, subLabel, color }) {
  return (
    <div className="d-flex m-2">
      <div
        className="p-3"
        style={{
          borderRadius: "20%",
          width: "70px",
          height: "70px",
          backgroundColor: color,
          display: "inline-block",
        }}
      >
        <img src={svg} alt="legendBtn" />
      </div>
      <div className="d-flex flex-column m-2">
        <small>{subLabel}</small>
        <h5>{label}</h5>
      </div>
    </div>
  );
}

export default LegendBtn;
