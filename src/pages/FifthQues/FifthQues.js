import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../comps/Card/Card";
import { CardBorder } from "../../comps/CardBorder/CardBorder";
import { ColorStick } from "../../comps/ColorStick/ColorStick";
import { Header } from "../../comps/Header/Header";
import { QuestionField } from "../../comps/QuestionField/QuestionField";
import { OtherAns } from "../../comps/OtherAns/OtherAns";
import { getWindowDimensions } from "../../helpers/func";
import { dataContext } from "../../contexts/DataContext";

const FifthQues = () => {
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

  return (
    <div style={{ backgroundColor: "#E8F0F2", height: "100vh" }}>
      <Header value={5} isMain={false} />
      <ColorStick width={`${(windowDimensions / 10) * 5}px`} />
      <QuestionField ques="Would you like to protect your eyes from light emanating from screens?" />
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
              changeURL(url + "blue_light=true&");
            }}
          >
            <Card
              height="84px"
              type="text"
              content={{ text: "Yes" }}
              width="294px"
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
              changeURL(url + "blue_light=false&");
            }}
          >
            <Card
              height="84px"
              type="text"
              content={{ text: "No" }}
              width="294px"
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

export default FifthQues;
