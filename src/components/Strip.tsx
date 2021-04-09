import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import "./Strip.css";

const MESSAGE_INFO = "Envoyez vos messages sur Facebook à Laper SonnaKontakter : shorturl.at/evCD5";

const messages = [
  MESSAGE_INFO,
  "Message 1 : trucbeuobaoeu",
  "Message 2 : BITEEE",
  "Message 3: COUIleleeee",
  "Message 4 : bazidpidzadzazad",
  "Message 5 : bazidpiddzadzadzazadzazad",
  "Message 6 : bazidpidzadzazad",
  MESSAGE_INFO,
  MESSAGE_INFO,
  MESSAGE_INFO,
];

const SPEED = 80;

const rotate = (width: number) => keyframes`
  from {
    margin-left: 2000px;
  }
  to {
    margin-left: -${width + 2000}px;
  }
`;

interface AnimatedStripProps {
  width: number;
  duration: number;
}

const AnimatedStrip = styled.div`
  flex-grow: 1;
  white-space: nowrap;
  overflow: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;
  margin-left: 2000px;

  animation: ${(props: AnimatedStripProps) => rotate(props.width)} linear
    ${(props: AnimatedStripProps) => props.duration}s infinite;

  display: flex;
  flex-direction: row;

  padding: 10px 5px;
  font-size: 25px;
`;

const Strip = () => {
  const [width, setWidth] = useState(0);
  const animationInfo = {
    width,
    duration: (width + 3600) / SPEED,
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
    <AnimatedStrip width={animationInfo.width} duration={animationInfo.duration} ref={ref}>
      {messages.map((message) => (
        <div className="message" key={message}>
          <p className="sub-message">{message}</p>
          <p className="sub-message">
            <img
              className="sub-message-img"
              src={`${process.env.PUBLIC_URL}/favicon.png`}
              alt="logo hyris"
            />
          </p>
        </div>
      ))}
    </AnimatedStrip>
  );
};

export default Strip;
