import React from "react";
import "./Style.css";
import image01 from "./images/first.jpg";
import image02 from "./images/second.jpg";
import image03 from "./images/third.jpg";
import image04 from "./images/fourth.jpg";
import image05 from "./images/five.jpg";
import image06 from "./images/six.jpg";
import image07 from "./images/seven.jpg";
const Galleryrotation = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('./src/images/girlsbaby.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="box"
      >
        <span style={{ "--i": 1 }}>
          <img src={image01} alt="" />
        </span>
        <span style={{ "--i": 2 }}>
          <img src={image02} alt="" />
        </span>
        <span style={{ "--i": 3 }}>
          <img src={image03} alt="" />
        </span>
        <span style={{ "--i": 4 }}>
          <img src={image04} alt="" />
        </span>
        <span style={{ "--i": 5 }}>
          <img src={image05} alt="" />
        </span>
        <span style={{ "--i": 6 }}>
          <img src={image06} alt="" />
        </span>
        <span style={{ "--i": 7 }}>
          <img src={image07} alt="" />
        </span>
        <span style={{ "--i": 8 }}>
          <img src={image01} alt="" />
        </span>
      </div>
    </>
  );
};

export default Galleryrotation;
