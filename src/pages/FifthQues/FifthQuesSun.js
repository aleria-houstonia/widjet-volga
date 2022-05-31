import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../comps/Card/Card";
import { CardBorder } from "../../comps/CardBorder/CardBorder";
import { ColorStick } from "../../comps/ColorStick/ColorStick";
import { Header } from "../../comps/Header/Header";
import { QuestionField } from "../../comps/QuestionField/QuestionField";
import { dataContext } from "../../contexts/DataContext";
import { shades } from "../../assets/imgs";
import { getWindowDimensions } from "../../helpers/func";

const FifthQuesSun = () => {
  const { changeURL, url, gender } = useContext(dataContext);
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
  let content = {
      text: "Dark Shade",
      img: shades.darkShade,
    },
    content2 = {
      text: "Light Shade",
      img: shades.lightShade,
    },
    content3 = {
      text: "Transitioning Shade",
      img: shades.transitioningShade,
    };
  return (
    <div style={{ backgroundColor: "#E8F0F2", height: "100vh" }}>
      <Header value={5} isMain={false} />
      <ColorStick width={`${(windowDimensions / 10) * 5}px`} />
      <QuestionField ques="When you’re out and about, which shade of lenses do you prefer?" />
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
              changeURL(url + "shade=dark&");
            }}
          >
            <Card
              height="89px"
              type="img-text-horiz"
              content={content}
              width="304px"
              comp={
                gender === "both"
                  ? "/sixthboth"
                  : gender === "man"
                  ? "/sixthman"
                  : "/sixthwoman"
              }
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "shade=light&");
            }}
          >
            <Card
              height="89px"
              type="img-text-horiz"
              content={content2}
              width="304px"
              comp={
                gender === "both"
                  ? "/sixthboth"
                  : gender === "man"
                  ? "/sixthman"
                  : "/sixthwoman"
              }
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeURL(url + "shade=transitiont&");
            }}
          >
            <Card
              height="89px"
              type="img-text-horiz"
              content={content3}
              width="304px"
              comp={
                gender === "both"
                  ? "/sixthboth"
                  : gender === "man"
                  ? "/sixthman"
                  : "/sixthwoman"
              }
            />
          </div>
        </CardBorder>
      </div>
    </div>
  );
};

export default FifthQuesSun;
