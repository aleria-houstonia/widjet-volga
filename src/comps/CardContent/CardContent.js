import React from "react";
import { images } from "../../assets/imgs";

export const CardContent = ({ params }) => {
  if (params.type === "text") {
    return (
      <div
        style={{
          fontFamily: "Open Sans",
          fontStyle: "normal",
          fontWeight: "600",
          fontSize: "18px",
          lineHeight: "25px",
          textAlign: "center",
          color: "#425A60",
        }}
      >
        {params.content.text}
      </div>
    );
  } else if (params.type === "img-text-vert") {
    // console.log(params.content.img);
    return (
      <div>
        <img
          style={{ width: params.content.width, height: params.content.height }}
          src={params.content.img}
        />
        <p
          style={{
            fontFamily: "Open Sans",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#425A60",
            margin: "14px",
          }}
        >
          {params.content.text}
        </p>
      </div>
    );
  } else if (params.type === "text-text") {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            fontFamily: "Open Sans",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#425A60",
            margin: "14px",
          }}
        >
          {params.content.text}
        </div>
        <div
          style={{
            fontFamily: "Open Sans",
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#0F0F0F",
            margin: "14px",
          }}
        >
          {params.content.text2}
        </div>
      </div>
    );
  } else if (params.type === "img-text-horiz") {
    // console.log(params.content.img);
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          style={{ width: "45px", margin: "25px" }}
          src={params.content.img}
        />
        <img style={{ marginRight: "10px" }} src={images.stick} />
        <div
          style={{
            fontSize: "16px",
          }}
        >
          {params.content.text}{" "}
        </div>
      </div>
    );
  } else if (params.type === "img") {
    return (
      <div>
        <img
          style={{ width: params.content.width, height: params.content.height }}
          src={params.content.img}
        />
      </div>
    );
  } else {
    return <div>error</div>;
  }
};
