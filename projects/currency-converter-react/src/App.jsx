import { useState, useCallback, useEffect } from "react";
import "./index.css";
import bgImage from "./assets/background-image.jpg";
import leftBGImage from "./assets/left-bg.jpg";
// import InputBox from "./components/InputBox"; This will also work but below import is better
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  //All the states will be here
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState("");

  //Custom hook
  let currencyData = useCurrencyInfo(from);

  //Function to convert amount
  const convertAmount = () => {
    if (!currencyData[to]) return;

    setConvertedAmount(Number(amount * Number(currencyData[to])));
  };

  useEffect(() => {
    if (currencyData) {
      convertAmount();
    }
  }, [currencyData, to]);

  //Swap the currencies and amount
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <div
      className="h-screen w-full flex sm:p-10 p-0 transition-all duration-300 flex-col sm:flex-row items-center sm:items-start"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Left container */}
      <div className="left w-1/2 sm:h-full h-1/4  justify-center items-center p-2 mt-10 sm:mt-0 sm:flex">
        <div className="flex justify-center items-center p-5  backdrop-blur-sm bg-white/30 border border-gray-60 rounded-full">
          <img src={`${leftBGImage}`} alt="" className="rounded-full" />
        </div>
      </div>

      {/* Right container */}
      <div className="right sm:w-1/2 w-full h-full  sm:bg-white/20 sm:border sm:border-gray-60 sm:p-10 p-4 sm:backdrop-blur-sm rounded-lg ">
        <div>
          <form
            className="flex flex-col items-center w-full mt-7 sm:mt-0"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {/* Input box */}
            <div className="w-full">
              <InputBox
                defaultCurrency={from}
                inputAmount={amount}
                label={"From"}
                onCurrencyChange={setFrom}
                onAmountChange={setAmount}
                currencyOptions={currencyData}
              ></InputBox>
            </div>

            <button
              onClick={swap}
              className="bg-blue-700 px-10 text-lg py-2 rounded-full text-white z-3 -m-3 cursor-pointer"
            >
              Swap
            </button>

            {/* Output box */}
            <div className=" w-full">
              <InputBox
                defaultCurrency={to}
                inputAmount={convertedAmount}
                label={"To"}
                onAmountChange={setConvertedAmount}
                amountDisable
                onCurrencyChange={setTo}
                currencyOptions={currencyData}
              ></InputBox>
            </div>

            <button
              type="submit"
              onClick={convertAmount}
              className="bg-blue-700 px-10 w-full text-lg py-2 rounded-full text-white z-3 mt-3 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95"
            >
              Convert
            </button>

            <div className="bg-white/40 backdrop-blur-lg w-full text-xl  px-4 py-2 mt-2 rounded-lg text-black/60">
              {amount.toFixed(3)} {from.toUpperCase()} ={" "}
              {Number(convertedAmount).toFixed(3)} {to.toUpperCase()}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
