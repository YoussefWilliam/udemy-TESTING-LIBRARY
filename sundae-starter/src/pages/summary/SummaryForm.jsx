import { useState } from "react";
import { OverlayTrigger } from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  const handleOnCheck = () => {
    setIsChecked((prevState) => !prevState);
  };
  return (
    <>
      <div>
        <input type="checkbox" id="agree-on-checkbox" onClick={handleOnCheck} />
        <label htmlFor="agree-on-checkbox">{checkboxLabel}</label>
      </div>
      <button disabled={!isChecked}>Confirm Order</button>
    </>
  );
};

export default SummaryForm;
