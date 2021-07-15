import React from "react";

const Spinner: React.FC = () => (
  <div
    style={{
      display: "block",
      position: "absolute",
      right: "50%",
      top: "50%",
      zIndex: 1031,
    }}
  >
    <img
      src="/acanthus_icon.png"
      style={{
        animation: "1s ease-in-out infinite spinner",
        filter: "opacity(0.2)",
        boxSizing: "border-box",
        height: "80px",
        width: "auto",
      }}
    ></img>
  </div>
);

export default Spinner;
