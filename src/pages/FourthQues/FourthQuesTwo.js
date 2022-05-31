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

const FourthQuesTwo = () => {
  const { changeURL, url, typeGlasses } = useContext(dataContext);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions().width
  );
  const history = useNavigate();
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions().width);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: "#E8F0F2", height: "100vh" }}>
      <Header value={4} isMain={false} />
      <ColorStick width={`${(windowDimensions / 10) * 4}px`} />
      <QuestionField ques="How wide would you say your face is?" />
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
              changeURL(url + "frame_size=66&");
            }}
          >
            <Card
              height="84px"
              type="text"
              content={{ text: "Wider Than Average" }}
              width="294px"
              comps={typeGlasses === "Sunglasses" ? "/fifthsun" : "/fifth"}
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "frame_size=67&");
            }}
          >
            <Card
              height="84px"
              type="text"
              content={{ text: "Average" }}
              width="294px"
              comps={typeGlasses === "Sunglasses" ? "/fifthsun" : "/fifth"}
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "frame_size=68&");
            }}
          >
            <Card
              type="text"
              content={{ text: "Narrower Than Average" }}
              width="294px"
              height="84px"
              comps={typeGlasses === "Sunglasses" ? "/fifthsun" : "/fifth"}
            />
          </div>
        </CardBorder>
      </div>
      <div
        onClick={() => {
          history(typeGlasses === "Sunglasses" ? "/fifthsun" : "/fifth");
        }}
      >
        <OtherAns text="I’m not sure" />
      </div>
    </div>
  );
};

export default FourthQuesTwo;
