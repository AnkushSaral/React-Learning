import { useState, useEffect } from "react";

// We will use this API
// https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/
// let URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyName}.json`

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((data) => setCurrencyInfo(data[currency]));
  }, [currency]);

  return currencyInfo;
}

export default useCurrencyInfo;
