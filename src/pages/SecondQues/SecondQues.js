import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../comps/Card/Card";
import { CardBorder } from "../../comps/CardBorder/CardBorder";
import { ColorStick } from "../../comps/ColorStick/ColorStick";
import { Header } from "../../comps/Header/Header";
import { QuestionField } from "../../comps/QuestionField/QuestionField";
import { glasses } from "../../assets/imgs";
import { OtherAns } from "../../comps/OtherAns/OtherAns";
import { dataContext } from "../../contexts/DataContext";
import { getWindowDimensions } from "../../helpers/func";
import { useNavigate } from "react-router-dom";
const SecondQues = () => {
  const { changeURL, url, changeTypeGlasses, gender } = useContext(dataContext);
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
      <Header value={2} isMain={false} />
      <ColorStick width={`${(windowDimensions / 10) * 2}px`} />
      <QuestionField ques="What type of glasses are  you looking for?" />
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
            data-testid={gender === "man" ? "man-choiced" : "woman-choiced"}
            onClick={() => {
              changeTypeGlasses("Sunglasses");
              changeURL(url + "eyewear_type=211&");
            }}
          >
            <Card
              type="img-text-vert"
              content={{
                img:
                  gender === "man"
                    ? glasses.manSunglasses
                    : glasses.girlSunglasses,
                text: "Sunglasses",
              }}
              width="274px"
              comp="/firstmessage"
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeTypeGlasses("Eyeglasses");
              changeURL(url + "eyewear_type=210&");
            }}
          >
            <Card
              type="img-text-vert"
              content={{
                img:
                  gender === "man"
                    ? glasses.manEyeglasses
                    : glasses.girlEyeglasses,
                text: "Eyeglasses",
              }}
              width="274px"
              comp="/firstmessage"
            />
          </div>
        </CardBorder>
      </div>
      <div
        onClick={() => {
          history("/firstmessage");
        }}
      >
        <OtherAns text="I want to see both" />
      </div>
    </div>
  );
};

export default SecondQues;
