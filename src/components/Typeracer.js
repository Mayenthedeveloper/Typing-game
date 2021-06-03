import React from "react";
import Button from "./Button";

const Typeracer = () => {
  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>New Word</p>
      </div>
      <div>
        <p className="time">Time</p>
      </div>
      <div className="wordValues">
        <input type="text">
          <Button />
        </input>
      </div>
    </div>
  );
};

export default Typeracer;
