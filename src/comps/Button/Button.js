import React from "react";
import "./Button.css";

export const Button = ({ text, classNameCond, func = () => {} }) => {
  return (
    <button
      className={classNameCond === true ? "w-btn" : "w-btn-noactive"}
      onClick={func}
    >
      {text}
    </button>
  );
};
