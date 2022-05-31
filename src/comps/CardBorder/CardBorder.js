import React from "react";

const styles = {
  border: " 1px solid rgba(231, 235, 237, 0.80141)",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.06)",
  borderRadius: "14px",
  background: "#FFFFFF",
  marginBottom: "14px",
};
export const CardBorder = ({ children }) => (
  <div className="card-border" style={styles}>
    {children}
  </div>
);
