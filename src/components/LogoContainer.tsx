import React from "react";
import "./LogoContainer.css";

const LogoContainer = () => (
  <img alt="logo hyris" className="logo" src={`${process.env.PUBLIC_URL}/logo.png`} />
);

export default LogoContainer;
