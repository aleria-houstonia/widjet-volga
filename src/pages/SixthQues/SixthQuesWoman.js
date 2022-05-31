import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../comps/Card/Card";
import { CardBorder } from "../../comps/CardBorder/CardBorder";
import { ColorStick } from "../../comps/ColorStick/ColorStick";
import { Header } from "../../comps/Header/Header";
import { QuestionField } from "../../comps/QuestionField/QuestionField";
import { OtherAns } from "../../comps/OtherAns/OtherAns";
import { dataContext } from "../../contexts/DataContext";
import { faces } from "../../assets/imgs";
import { useNavigate } from "react-router-dom";

const SixthQuesWoman = () => {
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

  const history = useNavigate();
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions().width);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  let content = {
      text: "I have a long face",
      img: faces.girlLongFace,
    },
    content2 = {
      text: "I have a round face",
      img: faces.girlRoundFace,
    },
    content3 = {
      text: "In between",
      img: faces.girlInBetween,
    };
  return (
    <div style={{ backgroundColor: "#E8F0F2", height: "100vh" }}>
      <Header value={6} isMain={false} />
      <ColorStick width={`${(windowDimensions / 10) * 6}px`} />
      <QuestionField ques="Every face shape has a perfect fit. What’s yours?" />
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
              changeURL(url + "face_shape=long&");
            }}
          >
            <Card
              height="89px"
              type="img-text-horiz"
              content={content}
              width="314px"
              comp="/seventh"
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "face_shape=round&");
            }}
          >
            <Card
              height="89px"
              type="img-text-horiz"
              content={content2}
              width="314px"
              comp="/seventh"
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "face_shape=between&");
            }}
          >
            <Card
              height="89px"
              type="img-text-horiz"
              content={content3}
              width="314px"
              comp="/seventh"
            />
          </div>
        </CardBorder>
      </div>
      <div
        onClick={() => {
          history("/seventh");
        }}
      >
        <OtherAns text="I don’t know" />
      </div>
    </div>
  );
};

export default SixthQuesWoman;
