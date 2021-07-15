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
        animation: "3s linear infinite spinner",
        boxSizing: "border-box",
        height: "60px",
        width: "auto",
      }}
    ></img>
  </div>
);

export default Spinner;
