import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { headerImgs } from "../../assets/imgs";
import { dataContext } from "../../contexts/DataContext";

export const Header = ({ value, isMain }) => {
  const { changeURL, url, needCorrection } = useContext(dataContext);
  const history = useNavigate();
  const pathname = useLocation();
  const [prev, setPrev] = useState("/");
  function workParams() {
    switch (value) {
      case 0:
        break;
      case 1:
        changeURL(url.replace(url.slice(url.lastIndexOf("?"), url.length), ""));

        break;
      case 2:
        changeURL(
          url.replace(
            url.slice(
              url.lastIndexOf("&", url.lastIndexOf("&") - 1),
              url.lastIndexOf("&")
            ),
            ""
          )
        );

        break;
      case 3:
        if (needCorrection) {
          changeURL(
            url.replace(
              url.slice(
                url.lastIndexOf("&", url.lastIndexOf("&") - 1),
                url.lastIndexOf("&")
              ),
              ""
            )
          );
        }

        break;
      case 4:
        changeURL(
          url.replace(
            url.slice(
              url.lastIndexOf("&", url.lastIndexOf("&") - 1),
              url.lastIndexOf("&")
            ),
            ""
          )
        );

        break;
      case 5:
        changeURL(
          url.replace(
            url.slice(
              url.lastIndexOf("&", url.lastIndexOf("&") - 1),
              url.lastIndexOf("&")
            ),
            ""
          )
        );

        break;
      case 6:
        changeURL(
          url.replace(
            url.slice(
              url.lastIndexOf("&", url.lastIndexOf("&") - 1),
              url.lastIndexOf("&")
            ),
            ""
          )
        );

        break;
      case 7:
        changeURL(
          url.replace(
            url.slice(
              url.lastIndexOf("&", url.lastIndexOf("&") - 1),
              url.lastIndexOf("&")
            ),
            ""
          )
        );

        break;
      case 8:
        changeURL(
          url.replace(
            url.slice(
              url.lastIndexOf("&", url.lastIndexOf("&") - 1),
              url.lastIndexOf("&")
            ),
            ""
          )
        );

        break;
      case 9:
        break;
      case 10:
        changeURL(
          url.replace(
            url.slice(
              url.lastIndexOf("&", url.lastIndexOf("&") - 1),
              url.lastIndexOf("&")
            ),
            ""
          )
        );
        break;
    }
  }
  useEffect(() => {
    switch (value) {
      case 0:
        setPrev("/");
        break;
      case 1:
        setPrev("/");
        break;
      case 2:
        setPrev("/first");
        break;
      case 3:
        setPrev("/second");
        break;
      case 4:
        setPrev("/third");
        break;
      case 5:
        setPrev("/fourth");
        break;
      case 6:
        setPrev("/fifth");
        break;
      case 7:
        setPrev("/sixthman");
        break;
      case 8:
        setPrev("/seventh");
        break;
      case 9:
        setPrev("/eighth");
        break;
      case 10:
        setPrev("/ninth");
        break;
    }
  }, []);

  return (
    <div>
      {isMain ? (
        <div className="main-header">
          <div>
            <img src={headerImgs.optimaxDev} />
          </div>
          {pathname.pathname === "/finish" ? (
            <div
              onClick={() => {
                history("/");
                changeURL("");
              }}
            >
              <img src={headerImgs.closeImg} />
            </div>
          ) : (
            <div onClick={() => history("/first")}>
              <img src={headerImgs.arrowRight} />
            </div>
          )}
        </div>
      ) : (
        <div className="main-header">
          <div
            onClick={() => {
              workParams();
              history(prev);
            }}
          >
            <img src={headerImgs.arrowLeft} />
          </div>
          <div className="header-page-value">{value}/10</div>
          <div
            data-testid="header-page-close"
            onClick={() => {
              history("/");
              changeURL("");
            }}
          >
            <img src={headerImgs.closeImg} />
          </div>
        </div>
      )}
    </div>
  );
};
