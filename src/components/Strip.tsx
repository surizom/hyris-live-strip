import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import "./Strip.css";

const messages = [
  "Envoyez vos msg au 102910921",
  "Lorem ipsum dolor sit amet",
  "deserunt mollit anim id est laborzaddazdzaum",
  "Envoyez vos msg au 10291011921",
];

const SPEED = 80;

const rotate = (width: number) => keyframes`
  from {
    margin-left: 1800px;
  }
  to {
    margin-left: -${width + 1800}px;
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
  margin-left: 1800px;

  animation: ${(props: AnimatedStripProps) => rotate(props.width)} linear
    ${(props: AnimatedStripProps) => props.duration}s;

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
    </AnimatedStrip>
  );
};

export default Strip;
