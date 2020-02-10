import React from "react";
import "./Spinner.css";

function Spinner() {
  return (
    <div className="load_spinner">
      {/* <span className="screen_out">로딩 중, 잠시만 기다려 주세요.</span> */}
      <span className="panel_g panel_spinner1">
        <span className="ico_circle circle1"></span>
        <span className="ico_circle circle2"></span>
        <span className="ico_circle circle3"></span>
        <span className="ico_circle circle4"></span>
      </span>
      <span className="panel_g panel_spinner2">
        <span className="ico_circle circle1"></span>
        <span className="ico_circle circle2"></span>
        <span className="ico_circle circle3"></span>
        <span className="ico_circle circle4"></span>
      </span>
      <span className="panel_g panel_spinner3">
        <span className="ico_circle circle1"></span>
        <span className="ico_circle circle2"></span>
        <span className="ico_circle circle3"></span>
        <span className="ico_circle circle4"></span>
      </span>
    </div>
  );
}

export default Spinner;
