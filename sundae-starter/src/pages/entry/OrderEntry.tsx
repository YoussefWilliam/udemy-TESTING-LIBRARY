import React from "react";
import { Alert } from "react-bootstrap";
import Options from "./Options";

export const AlertBanner = ({ message, variant }) => {
  const alertMessage = message || "Unexpected error";
  const alertVariant = variant || "danger";

  return (
    <Alert variant={variant} style={{ backgroundColor: "red" }}>
      {alertMessage}
    </Alert>
  );
};

const OrderEntry = () => {
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </div>
  );
};

export default OrderEntry;
