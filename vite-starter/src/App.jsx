import { useState } from "react";
import "./App.css";
function App() {
  const [color, setColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const handleOnClick = () => {
    setColor((prevState) => (prevState === "red" ? "blue" : "red"));
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
        Change to {color === "red" ? "blue" : "red"}
      </button>
      <br />
      <input onClick={handleOnCheck} checked={isChecked} type="checkbox" />
    </div>
  );
}

export default App;
