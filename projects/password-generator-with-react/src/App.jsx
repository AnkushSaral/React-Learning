import { useState } from "react";
import "./index.css";

function App() {
  const [password, setPassword] = useState("Your password will generate here");
  const [length, setLength] = useState(8);
  const [numberInclude, setNumberInclude] = useState(false);
  const [characterInclude, setCharacterInclude] = useState(false);

  return (
    <div className="bg-black h-screen w-screen flex justify-center">
      <div className="bg-gray-800 text-orange-500 w-[500px] h-fit px-10 py-5 mt-20 rounded-lg font-mono shadow-lg shadow-gray-700">
        <h1 className="text-3xl font-bold mb-5 text-center">
          Password Generator
        </h1>

        <div className="flex rounded-lg mb-5 items-center justify-center">
          <input
            type="text"
            placeholder="Password"
            value={password}
            className="rounded-l-lg outline-none border border-white px-2 py-1 bg-white h-10 w-[80%] select-none"
          ></input>

          <button className="bg-blue-800 h-10 w-[20%] rounded-r-lg text-white cursor-pointer select-none">
            Copy
          </button>
        </div>

        <div className="flex items-center justify-center select-none">
          <input
            type="range"
            min={8}
            max={100}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label for="range" className="ml-2 text-sm">
            Length {`(${length})`}
          </label>

          <input
            type="checkbox"
            id="number"
            className="cursor-pointer ml-1"
            defaultChecked={numberInclude}
          ></input>
          <label for="number" className="ml-2 text-sm cursor-pointer">
            Number
          </label>

          <input
            type="checkbox"
            id="character"
            className="cursor-pointer ml-1"
            defaultChecked={characterInclude}
          ></input>
          <label for="character" className="ml-2 text-sm cursor-pointer">
            Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
