import React from "react";
import "./LogoContainer.css";

const LogoContainer = () => (
  <div className="logo-container">
    <img alt="logo hyris" className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} />
  </div>
);

export default LogoContainer;
