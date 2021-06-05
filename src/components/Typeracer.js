import React from "react";
import Button from "./Button";

const Typeracer = (props) => {
  const {
    newWord,
    inputValue,
    setInputValue,
    time,
    disabled,
    animation,
  } = props;

  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>{newWord} </p>
      </div>
      <div
        style={{ animation: animation !== null ? animation : "" }}
        className="time"
      >
        <p>{time}</p>
      </div>
      <div className="wordValues">
        <input
          type="text"
          value={inputValue}
          disabled={disabled && disabled}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={disabled ? "" : "Start typing..."}
        />
        <Button />
      </div>
    </div>
  );
};

export default Typeracer;
