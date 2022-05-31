import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../comps/Card/Card";
import { CardBorder } from "../../comps/CardBorder/CardBorder";
import { ColorStick } from "../../comps/ColorStick/ColorStick";
import { Header } from "../../comps/Header/Header";
import { QuestionField } from "../../comps/QuestionField/QuestionField";
import { arrBrand, arrBrand2, arrBrand3 } from "../../helpers/arrGlass";
import { getWindowDimensions } from "../../helpers/func";

// import "./eighth.css";
import { images } from "../../assets/imgs";
import { Button } from "../../comps/Button/Button";
import { dataContext } from "../../contexts/DataContext";

const TenthQues = () => {
  const { changeURL, url } = useContext(dataContext);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions().width
  );
  function setUrlParam(param) {
    changeURL(url + param + ",");
  }
  const [counter, setCounter] = useState(0);
  const history = useNavigate();
  function getValCounter(condition) {
    let val = counter;
    if (condition) {
      setCounter(val + 1);
    } else {
      setCounter(val - 1);
    }
  }
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions().width);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={{ backgroundColor: "#E8F0F2", height: "100vh" }}>
      <Header value={10} isMain={false} />
      <ColorStick width={`${windowDimensions}px`} />
      <QuestionField ques="Choose your favorite brands" />
      <div className="eight-text">You can pick more than one.</div>
      <div className="product-slider">
        <div className="product-slider-line">
          {arrBrand.map((i) => (
            <ProductCard i={i} func={getValCounter} func2={setUrlParam} />
          ))}
        </div>
        <div className="product-slider-line">
          {arrBrand2.map((i) => (
            <ProductCard i={i} func={getValCounter} func2={setUrlParam} />
          ))}
        </div>
        <div className="product-slider-line">
          {arrBrand3.map((i) => (
            <ProductCard i={i} func={getValCounter} func2={setUrlParam} />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          func={() => {
            if (counter > 0) {
              history("/finish");
              changeURL(url.replace(/.$/, ""));
            }
          }}
          text="Continue"
          classNameCond={counter > 0}
        />
      </div>
    </div>
  );
};

export default TenthQues;

function ProductCard({ i, func, func2 }) {
  const { changeURL, url } = useContext(dataContext);
  const [bord, setBord] = useState(false);
  const styles = {
    border:
      bord === true
        ? "2px solid #2196F3"
        : " 1px solid rgba(231, 235, 237, 0.80141)",
    width: "160px",
    height: "105px",
    borderRadius: "14px",
    position: "relative",
  };
  function strParamOperations() {
    if (i.cond) {
      func2(i.tech);
    } else {
      changeURL(url.replace(i.tech + ",", ""));
    }
  }
  return (
    <div
      style={styles}
      key={i.name}
      onClick={() => {
        i.cond = !i.cond;
        setBord(i.cond);
        func(i.cond);
        strParamOperations();
      }}
    >
      {bord && (
        <img
          src={images.checkedLogo}
          style={{
            position: "absolute",
            right: "0",
          }}
        />
      )}
      <CardBorder>
        <Card
          height="103px"
          type="img"
          content={{ img: i.img, width: i.width, height: i.height }}
          width="160px"
          comp="/tenth"
        />
      </CardBorder>
    </div>
  );
}
