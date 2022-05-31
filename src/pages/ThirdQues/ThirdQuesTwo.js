import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../comps/Card/Card";
import { CardBorder } from "../../comps/CardBorder/CardBorder";
import { ColorStick } from "../../comps/ColorStick/ColorStick";
import { Header } from "../../comps/Header/Header";
import { QuestionField } from "../../comps/QuestionField/QuestionField";
import { OtherAns } from "../../comps/OtherAns/OtherAns";
import { dataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

const ThirdQuesTwo = () => {
  const { changeURL, url } = useContext(dataContext);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions().width
  );
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

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
      <QuestionField ques="What do you need your glasses for?" />
      <div
        className="cards"
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "lenstype=6&");
            }}
          >
            <Card
              height="84px"
              type="text"
              content={{ text: "Near Vision" }}
              width="294px"
              comp="/fourth"
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "lenstype=6&");
            }}
          >
            <Card
              height="84px"
              type="text"
              content={{ text: "Distance Vision" }}
              width="294px"
              comp="/fourth"
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "lenstype=7&");
            }}
          >
            <Card
              type="text"
              content={{ text: "Multifocal / Progressive" }}
              width="294px"
              height="84px"
              comp="/fourth"
            />
          </div>
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

export default ThirdQuesTwo;
