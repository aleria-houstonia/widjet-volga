import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../comps/Card/Card";
import { CardBorder } from "../../comps/CardBorder/CardBorder";
import { ColorStick } from "../../comps/ColorStick/ColorStick";
import { Header } from "../../comps/Header/Header";
import { QuestionField } from "../../comps/QuestionField/QuestionField";
import { OtherAns } from "../../comps/OtherAns/OtherAns";
import { getWindowDimensions } from "../../helpers/func";
import { dataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

const ThirdQues = () => {
  const { changeCorrection } = useContext(dataContext);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions().width
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions().width);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const history = useNavigate();
  return (
    <div style={{ backgroundColor: "#E8F0F2", height: "100vh" }}>
      <Header value={3} isMain={false} />
      <ColorStick width={`${(windowDimensions / 10) * 3}px`} />
      <QuestionField ques="Do you need vision correction?" />
      <div
        className="cards"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          onClick={() => {
            changeCorrection(true);
          }}
        >
          <CardBorder>
            <Card
              type="text"
              content={{ text: "Yes" }}
              width="274px"
              comp="/thirdtwo"
            />
          </CardBorder>
        </div>
        <CardBorder>
          <Card
            type="text"
            content={{ text: "No" }}
            width="274px"
            comp="/fourth"
          />
        </CardBorder>
      </div>
      <div
        onClick={() => {
          history("/fourth");
        }}
      >
        <OtherAns text="Skip" />
      </div>
    </div>
  );
};

export default ThirdQues;
