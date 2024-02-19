import React from "react";
import SummaryForm from "./SummaryForm";
import { useOrderDetails } from "../../context/OrderDetails";
import { formatCurrency } from "../../prices";

export const OrderSummary = () => {
  const { totals, optionsCount } = useOrderDetails();

  const scoopArray = Object.entries(optionsCount.scoops);
  const scroopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingsArray = Object.entries(optionsCount.toppings);
  const toppingsList = toppingsArray.map((key) => <li key={key}>{key}</li>);
  return (
    <div>
      <h1>OrderSummary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <ul>{scroopList}</ul>
      <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
      <ul>{toppingsList}</ul>
      <SummaryForm />
    </div>
  );
};
