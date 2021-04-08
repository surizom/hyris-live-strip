import React from "react";
import LogoContainer from "./LogoContainer";
import Strip from "./Strip";
import "./StripContainer.css";

const StripContainer = () => (
  <div className="container">
    <LogoContainer />
    <div className="separator">|</div>
    <Strip />
  </div>
);

export default StripContainer;
