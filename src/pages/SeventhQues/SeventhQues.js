import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../comps/Card/Card";
import { CardBorder } from "../../comps/CardBorder/CardBorder";
import { ColorStick } from "../../comps/ColorStick/ColorStick";
import { Header } from "../../comps/Header/Header";
import { QuestionField } from "../../comps/QuestionField/QuestionField";
import { OtherAns } from "../../comps/OtherAns/OtherAns";
import { dataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";

const SeventhQues = () => {
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
    <div>
      <Header value={7} isMain={false} />
      <ColorStick width={`${(windowDimensions / 10) * 7}px`} />
      <QuestionField ques="How would you define your facial features?" />
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
              changeURL(url + "facial_features=sharp&shape=");
            }}
          >
            <Card
              height="84px"
              type="text"
              content={{ text: "Sharp" }}
              width="294px"
              comp="/eighth"
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "facial_features=rounded&shape=");
            }}
          >
            <Card
              height="84px"
              type="text"
              content={{ text: "Rounded" }}
              width="294px"
              comp="/eighth"
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "facial_features=between&shape=");
            }}
          >
            <Card
              height="84px"
              type="text"
              content={{ text: "In between" }}
              width="294px"
              comp="/eighth"
            />
          </div>
        </CardBorder>
      </div>
      <div
        onClick={() => {
          history("/eighth");
        }}
      >
        <OtherAns text="I don’t know" comps="/eighth" />
      </div>
    </div>
  );
};

export default SeventhQues;
