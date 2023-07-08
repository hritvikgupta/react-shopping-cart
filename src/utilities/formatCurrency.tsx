import React from "react";
const CURRENCY_FORMATOR = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
const formatCurrency = (number: number) => {
  return CURRENCY_FORMATOR.format(number);
};

export default formatCurrency;
