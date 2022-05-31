import React from "react";

const styles = {
  fontFamily: "Open Sans",
  fontStyle: "normal",
  fontWeight: 700,
  fontSize: "16px",
  lineHeight: "22px",
  textAlign: "center",
  textDecorationLine: "underline",
  color: "#3A4850",
  marginTop: "90px",
  paddingBottom: "24px",
};

export const OtherAns = ({ text, func = () => {} }) => {
  <div style={styles} className="other-text">
    {text}
  </div>;
};
