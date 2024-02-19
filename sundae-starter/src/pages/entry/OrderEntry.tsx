import React from "react";
import { Alert } from "react-bootstrap";
import Options from "./Options";
import { formatCurrency } from "../../prices";
import { useOrderDetails } from "../../context/OrderDetails";

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
  const { totals } = useOrderDetails();

  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
    </div>
  );
};

export default OrderEntry;
