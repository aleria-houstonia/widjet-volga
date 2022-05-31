import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { images } from "../../assets/imgs";
import { Button } from "../../comps/Button/Button";
import { Header } from "../../comps/Header/Header";
import { dataContext } from "../../contexts/DataContext";
import "./Main.css";

const Main = () => {
  const { url } = useContext(dataContext);
  console.log(url);
  const history = useNavigate();
  return (
    <div className="main-page">
      <Header value={0} isMain={true} />
      <div>
        <img className="main-page-img " src={images.home} />
      </div>
      <div className="main-page-section">
        <div className="main-page-section-title">
          Let’s find your perfect pair!
        </div>
        <div className="main-page-section-desc">
          Take the quiz to easily discover your perfect fit from thousands of
          styles
        </div>
        <div className="main-page-section-btn">
          <Button
            text="Start now"
            classNameCond={true}
            func={() => history("/first")}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
