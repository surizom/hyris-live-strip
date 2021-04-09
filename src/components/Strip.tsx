import React, { useEffect, useRef, useState } from "react";
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
  "Envoyez vos msg au 10291011921",
];

const SPEED = 80;

const Strip = () => {
  const [width, setWidth] = useState(0);
  const animationInfo = {
    length: width,
    duration: width / SPEED,
  };

  const ref = useRef(null);

  useEffect(() => {
    const { current } = ref;

    if (current != null) {
      // @ts-ignore
      setWidth(current.scrollWidth);
    }
  }, [ref]);

  // eslint-disable-next-line
  console.log(animationInfo);

  return (
    <div ref={ref} className="strip">
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
