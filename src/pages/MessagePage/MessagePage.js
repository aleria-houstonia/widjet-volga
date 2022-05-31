import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../comps/Header/Header";
import { circleMessageLogo } from "../../assets/imgs";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../../comps/Button/Button";
import "./page.css";
import { dataContext } from "../../contexts/DataContext";

const MessagePage = ({ message, isFinish }) => {
  const { typeGlasses, url } = useContext(dataContext);
  const history = useNavigate();
  const params = useLocation();
  const [val, setVal] = useState(0);
  const startTimer = () => {
    let path = "/";
    switch (params.pathname) {
      case "/firstmessage":
        path = "/third";
        setVal(3);
        break;
      case "/secondmessage":
        setVal(4);
        if (typeGlasses === "Sunglasses") {
          path = "/fifthsun";
        } else {
          path = "/fifth";
        }
        break;
    }
    setTimeout(() => {
      history(path);
    }, 2000);
  };
  useEffect(() => {
    if (!isFinish) {
      startTimer();
    }
  }, []);

  return (
    <div>
      <Header value={val} isMain={true} />
      <div className="message-page">
        <div className="message-img">
          {isFinish ? (
            <img src={circleMessageLogo.gift} />
          ) : (
            <img src={circleMessageLogo.like} />
          )}
        </div>
        <div className="message-title">{message}</div>
        {isFinish ? (
          <div>
            <div className="message-desc">
              Send the results to your email to receive <br /> special
              discounts.
            </div>
            <div className="message-btn">
              <Button
                text={"Send"}
                classNameCond={true}
                func={() => {
                  console.log(url);
                }}
              />
            </div>
            <div
              style={{
                width: "286px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "12px",
                lineHeight: "14px",
                textAlign: "center",
                color: "#5B6971",
                marginBottom: "25px",
                marginTop: "58px",
              }}
            >
              By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy
              and receiving promotion emails
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MessagePage;
