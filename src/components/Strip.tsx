import React from "react";
import "./Strip.css";

const messages = [
  "Envoyez vos msg au 102910921",
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "sed do eiusmod tempor incididunt ut labore et ",
  "dolore magna aliqua. Ut enim ad minim veniam",
  "quis nostrud exercitation ullamco laboris nisi ut aliquip",
  "ex ea commodo consequat. Duis aute irure dolor in reprehenderit i",
  "n voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
  "deserunt mollit anim id est laborum",
];

const Strip = () => (
  // const [scroll, setScroll] = useState(0);
  <div className="strip">
    {messages.map((message) => (
      <>
        <div className="message">{message.toUpperCase()}</div>
        <div className="message">•</div>
      </>
    ))}
  </div>
);

export default Strip;
