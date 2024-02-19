export const pricePerItem = {
  scoops: 2,
  toppings: 1.5,
};

export const formatCurrency = (currency) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(currency);
