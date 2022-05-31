import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../comps/Card/Card";
import { CardBorder } from "../../comps/CardBorder/CardBorder";
import { ColorStick } from "../../comps/ColorStick/ColorStick";
import { Header } from "../../comps/Header/Header";
import { QuestionField } from "../../comps/QuestionField/QuestionField";
import { images } from "../../assets/imgs";
import { OtherAns } from "../../comps/OtherAns/OtherAns";
import { dataContext } from "../../contexts/DataContext";
import { getWindowDimensions } from "../../helpers/func";
import { useNavigate } from "react-router-dom";

const FirstQues = (props) => {
  const { changeGender, changeURL, url } = useContext(dataContext);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions().width
  );
  useEffect(() => {
    changeURL(props.url + "/?");
    function handleResize() {
      setWindowDimensions(getWindowDimensions().width);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const history = useNavigate();
  return (
    <div>
      <Header value={1} isMain={false} />
      <ColorStick width={`${(windowDimensions / 10) * 1}px`} />
      <QuestionField ques="You are looking for" />
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
              changeGender("woman");
              changeURL(url + "gender=5&");
              history("/second");
            }}
          >
            <Card
              type="img-text-vert"
              content={{
                img: images.blackImgGirl,
                text: "Women's Styles",
                width: "44px",
                heigh: "44px",
              }}
              width="274px"
              comp="/second"
            />
          </div>
        </CardBorder>
        <CardBorder>
          <div
            onClick={() => {
              changeGender("man");
              changeURL(url + "gender=4&");
            }}
          >
            <Card
              type="img-text-vert"
              content={{
                img: images.blackImgMan,
                text: "Men's Styles",
                width: "44px",
                heigh: "44px",
              }}
              width="274px"
              comp="/second"
            />
          </div>
        </CardBorder>
      </div>
      <div
        onClick={() => {
          changeGender("/man");
          history("/second");
        }}
      >
        <OtherAns text="I'd like to see both" />
      </div>
    </div>
  );
};

export default FirstQues;
