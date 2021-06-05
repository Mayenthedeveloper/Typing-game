import React from "react";

const Button = ({ handleStart, diabled }) => {
  return <button onClick={handleStart}>{diabled ? "Start" : "Restart"}</button>;
};

export default Button;
