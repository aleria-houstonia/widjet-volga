import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../comps/Card/Card";
import { CardBorder } from "../../comps/CardBorder/CardBorder";
import { ColorStick } from "../../comps/ColorStick/ColorStick";
import { Header } from "../../comps/Header/Header";
import { QuestionField } from "../../comps/QuestionField/QuestionField";
import { images } from "../../assets/imgs";
import { OtherAns } from "../../comps/OtherAns/OtherAns";
import { getWindowDimensions } from "../../helpers/func";
import { dataContext } from "../../contexts/DataContext";
import { useNavigate } from "react-router-dom";
const FourthQues = () => {
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
  let content = {
      text: "Small",
      text2: "42-48 mm",
    },
    content2 = {
      text: "Medium",
      text2: "49-53 mm",
    },
    content3 = {
      text: "Large",
      text2: "54-58 mm",
    };

  return (
    <div style={{ backgroundColor: "#E8F0F2", height: "100vh" }}>
      <Header value={4} isMain={false} />
      <ColorStick width={`${(windowDimensions / 10) * 4}px`} />
      <QuestionField ques="What’s your current frame size?  " />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "35px" }}
      >
        <img src={images.frameOn4} />
      </div>
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
              changeURL(url + "frame_size=68&");
              history(typeGlasses === "Sunglasses" ? "/fifthsun" : "/fifth");
            }}
          >
            <Card
              type="text-text"
              content={content}
              width="318px"
              height="56px"
              comp={typeGlasses === "Sunglasses" ? "/fifthsun" : "/fifth"}
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              history(typeGlasses === "Sunglasses" ? "/fifthsun" : "/fifth");
              changeURL(url + "frame_size=67&");
            }}
          >
            <Card
              type="text-text"
              content={content2}
              width="318px"
              height="56px"
              comp={typeGlasses === "Sunglasses" ? "/fifthsun" : "/fifth"}
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "frame_size=66&");
              history(typeGlasses === "Sunglasses" ? "/fifthsun" : "/fifth");
            }}
          >
            <Card
              type="text-text"
              content={content3}
              width="318px"
              height="56px"
              comp={typeGlasses === "Sunglasses" ? "/fifthsun" : "/fifth"}
            />
          </div>
        </CardBorder>
      </div>
      <div
        onClick={() => {
          history("/secondmessage");
        }}
      >
        <OtherAns text="I don’t know" />
      </div>
    </div>
  );
};

export default FourthQues;
