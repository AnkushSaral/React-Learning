import { useState } from "react";
import { Button, ChangeBgColorButton } from "./components/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("bg-white");

  const increaseCount = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decreaseCount = () => {
    if (count > -10) {
      setCount(count - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div
      className={`w-screen h-screen flex flex-col items-center  ${bgColor} gap-2 mb-5 z-0`}
    >
      <div className="flex gap-4 w-[70%] h-fit   justify-center items-center  relative top-4">
        <div className="bg-blue-700 mt-4 w-[15%] h-10 flex items-center justify-center text-white rounded-full">
          {count}
        </div>
        <div className=" bg-blue-700 mt-4 w-[15%] h-10 flex items-center justify-center text-white rounded-full">
          {count}
        </div>
        <div className=" bg-blue-700 mt-4 w-[15%] h-10 flex items-center justify-center text-white rounded-full">
          {count}
        </div>
        <div className="bg-blue-700 mt-4 w-[15%] h-10 flex items-center justify-center text-white rounded-full">
          {count}
        </div>
      </div>

      <div className="buttons flex gap-1 mt-12.5 z-1 relative top-10">
        <Button text="Increase Count" onClick={increaseCount} />
        <Button text="Decrease Count" onClick={decreaseCount} />
        <Button text="Reset Count" onClick={resetCount} />
      </div>

      <div className="change-bgcolor-buttons flex gap-1 mt-12.5 z-1 relative top-10">
        <ChangeBgColorButton
          text="BG Gray"
          setBgColor={() => setBgColor("bg-gray-500")}
          currentBgColor="bg-gray-500"
        />
        <ChangeBgColorButton
          text="BG White"
          setBgColor={() => setBgColor("bg-white")}
          currentBgColor="bg-white"
        />
        <ChangeBgColorButton
          text="BG Blue"
          setBgColor={() => setBgColor("bg-blue-500")}
          currentBgColor="bg-blue-500"
        />
      </div>
    </div>
  );
}

export default App;
