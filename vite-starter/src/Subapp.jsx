import { useState } from "react";
import "./App.css";
function Subapp() {
  const [color, setColor] = useState("medium-violet-red");
  const [isChecked, setIsChecked] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const handleOnClick = () => {
    setColor((prevState) =>
      prevState === "medium-violet-red" ? "midnight-blue" : "medium-violet-red"
    );
  };

  const handleOnCheck = () => {
    setIsChecked((prevState) => !prevState);
    setIsBtnDisabled((prevState) => !prevState);
    setColor("grey");
  };

  return (
    <div>
      <button
        disabled={isBtnDisabled}
        className={color}
        onClick={handleOnClick}
      >
        Change to {color === "medium-violet-red" ? "blue" : "red"}
      </button>
      <br />
      <input onClick={handleOnCheck} checked={isChecked} type="checkbox" />
    </div>
  );
}

export default Subapp;
