import React from "react";
import "./Strip.css";

const messages = [
  "Envoyez vos msg au 102910921",
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "deserunt mollit anim id est laborum",
  "sed do eiusmod tempor incididunt ut labore et ",
  "deserunt mollit anim id est labdazzdorum",
  "Envoyez vos msg au 102910921212",
  "quis nostrud exercitation ullamco laboris nisi ut aliquip",
  "ex ea commodo consequat. Duis aute irure dolor in reprehenderit i",
  "deserunt mollit anim id est laborzaddazdzaum",
  "n voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
  "deserunt mollit anim id est laboazdadzrum",
  "Envoyez vos msg au 10291011921",
];

const Strip = () => {
  const animationInfo = {
    length: messages.join(",").length * 15,
    duration: (messages.join(",").length * 15) / 80,
  };

  // eslint-disable-next-line
  console.log(animationInfo);

  return (
    <div className="strip">
      {messages.map((message) => (
        <div className="message" key={message}>
          <p className="sub-message">{message.toUpperCase()}</p>
          <p className="sub-message">
            <img
              className="sub-message-img"
              src={`${process.env.PUBLIC_URL}/favicon.png`}
              alt="logo hyris"
            />
          </p>
        </div>
      ))}
    </div>
  );
};

export default Strip;
