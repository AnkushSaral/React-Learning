import React from "react";
import { useId } from "react";

function InputBox({
  defaultCurrency = "usd",
  label,
  inputAmount,
  onAmountChange,
  onCurrencyChange,
  amountDisable = false,
  currencyOptions = {},
}) {
  const amountInputId = useId();
  const selectCurrencyInputId = useId();

  return (
    <div className="bg-white p-2 rounded-lg flex">
      {/* Input amount */}
      <div className="w-1/2 p-2">
        <label
          htmlFor={amountInputId}
          className="text-xl text-black/40 select-none"
        >
          {label}
        </label>
        <input
          value={inputAmount}
          disabled={amountDisable}
          className="w-full mt-2 text-l outline-none"
          onChange={(e) => {
            onAmountChange && onAmountChange(Number(e.target.value));
          }}
          type="number"
          name=""
          id={amountInputId}
          step={"any"}
        />
      </div>

      {/* Input Currency */}
      <div className="w-1/2 p-2 flex items-end flex-col">
        <label
          htmlFor={selectCurrencyInputId}
          className="text-xl text-black/40 select-none flex justify-end"
        >
          Currency Type
        </label>

        <select
          value={defaultCurrency}
          id={selectCurrencyInputId}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(String(e.target.value));
          }}
          className="flex justify-end cursor-pointer mt-2 text-l border border-black/40 rounded-lg outline-none px-4"
        >
          {Object.keys(currencyOptions).map((currency) => (
            <option key={currency} className="bg-white" value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
