import React, { useContext, useEffect, useState } from "react";
import { Card } from "../../comps/Card/Card";
import { CardBorder } from "../../comps/CardBorder/CardBorder";
import { ColorStick } from "../../comps/ColorStick/ColorStick";
import { Header } from "../../comps/Header/Header";
import { QuestionField } from "../../comps/QuestionField/QuestionField";
import { dataContext } from "../../contexts/DataContext";
import { getWindowDimensions } from "../../helpers/func";
import { useNavigate } from "react-router-dom";
const NinthQues = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions().width
  );
  const { changeURL, url } = useContext(dataContext);

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
      <Header value={9} isMain={false} />
      <ColorStick width={`${(windowDimensions / 10) * 9}px`} />
      <QuestionField ques="Are you looking for any particular eyewear brands?" />
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
              changeURL(url + "brand=");
              history("/tenth");
            }}
          >
            <Card
              type="text"
              content={{ text: "Yes, I have some in mind" }}
              width="274px"
              comp="/tenth"
            />
          </div>
        </CardBorder>
        <div
          data-testid="btn"
          onClick={() => {
            history("/finish");
          }}
        >
          <CardBorder>
            <Card
              type="text"
              content={{ text: "No, brand isn't important" }}
              width="274px"
              comp="/finish"
            />
          </CardBorder>
        </div>
      </div>
    </div>
  );
};

export default NinthQues;
