import React from "react";
import "./ColorStick.css";

export const ColorStick = ({ width }) => {
  return (
    <div className="colorstick">
      <div className="colorstick-fill" style={{ width: width }}></div>
    </div>
  );
};
