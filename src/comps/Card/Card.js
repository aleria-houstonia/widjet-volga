import React from "react";
import { CardContent } from "../CardContent/CardContent";
import "./Card.css";
import { useNavigate } from "react-router-dom";

export const Card = ({ content, width, type, comp, height = "138px" }) => {
  const history = useNavigate();
  return (
    <div className="card" style={{ height: height }}>
      <div
        className="card-text"
        style={{ width: width }}
        onClick={() => history(comp)}
      >
        <CardContent params={{ type, content }} />
      </div>
    </div>
  );
};
