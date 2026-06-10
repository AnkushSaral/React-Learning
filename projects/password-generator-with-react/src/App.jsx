import { useCallback, useEffect, useRef, useState } from "react";
import "./index.css";

function App() {
  // All the states that we need to manage in this app are declared here. We have the password, the length of the password, and whether to include numbers and characters in the password or not.
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberInclude, setNumberInclude] = useState(false);
  const [characterInclude, setCharacterInclude] = useState(false);
  const [copyButtonInnerText, setCopyButtonInnerText] = useState("Copy");
  const [copyButtonBGColor, setCopyButtonBGColor] = useState("bg-blue-700");

  // Reference of copy button
  const copyButton = useRef();

  // Reference of password field
  const passwordField = useRef();

  // Reference of generate new password button
  const generateNewPasswordButton = useRef();

  // Function to handle generate new password
  const handleGenerateNewPassword = () => {
    createPassword();
  };

  //Function to handle copy to clipboard
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordField.current.select();
    setCopyButtonInnerText("Copied");
    setCopyButtonBGColor("bg-blue-800");
    copyButton.current.disabled = true;

    setTimeout(() => {
      passwordField.current.setSelectionRange(0, 0);
      setCopyButtonInnerText("Copy");
      setCopyButtonBGColor("bg-blue-700");
      copyButton.current.disabled = false;
    }, 3000);
  };

  // Function to create password with the given length and the options to include numbers and characters. We create a string with all the characters that we want to include in the password and then we generate a random index to pick a character from the string and add it to the password. We repeat this process until we have the desired length of the password. Use this useeffect alone or use (usecallback + useeffect) combo both work well. I'm writing both of them here for you to see and understand. You can choose either one of them to use in your app. I have commented out the useeffect alone method and you can uncomment it if you want to use it. But you can only use one you have to comment other one.

  // Method 1
  // useEffect(() => {
  //   let newPassword = "";
  //   let passString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  //   if (numberInclude) {
  //     passString += "0123456789";
  //   }

  //   if (characterInclude) {
  //     passString += "!@#$%^&*()_+-=[]{}|;:,.<>?";
  //   }

  //   for (let index = 1; index <= length; index++) {
  //     let ranIndex = Math.floor((Math.random() * passString.length) + 1);
  //     newPassword += passString[ranIndex];
  //   }
  //   setPassword(newPassword);

  // }, [length, numberInclude, characterInclude]);

  // Method 2
  const createPassword = useCallback(() => {
    let newPassword = "";
    let passString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberInclude) {
      passString += "0123456789";
    }

    if (characterInclude) {
      passString += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }

    for (let index = 1; index <= length; index++) {
      let ranIndex = Math.floor(Math.random() * passString.length + 1);
      newPassword += passString[ranIndex];
    }

    setPassword(newPassword);
  }, [length, numberInclude, characterInclude, setPassword]);

  useEffect(() => {
    createPassword();
  }, [createPassword]);

  return (
    <div className="bg-black h-screen w-screen flex justify-center">
      <div className="bg-gray-800 text-orange-500 w-125 h-fit px-10 py-5 mt-20 rounded-lg font-serif shadow-lg shadow-gray-700">
        <h1 className="text-3xl font-bold mb-5 text-center select-none">
          Password Generator
        </h1>

        <div className="flex rounded-lg mb-5 items-center justify-center">
          <input
            ref={passwordField}
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            className="rounded-l-lg outline-none border border-white px-2 py-1 bg-white h-10 w-[80%] select-none"
          ></input>

          <button
            ref={copyButton}
            onClick={copyToClipboard}
            className={`${copyButtonBGColor} h-10 w-[20%] rounded-r-lg text-white cursor-pointer select-none transition-colors duration-300`}
          >
            {copyButtonInnerText}
          </button>
        </div>

        <div className="flex items-center justify-center select-none">
          <input
            type="range"
            min={8}
            max={100}
            className="cursor-pointer"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          ></input>
          <label htmlFor="range" className="ml-2 text-sm">
            Length {`(${length})`}
          </label>

          <input
            type="checkbox"
            id="number"
            className="cursor-pointer ml-2"
            defaultChecked={numberInclude}
            onClick={() => {
              setNumberInclude((prevNumberInclude) => !prevNumberInclude);
            }}
          ></input>
          <label htmlFor="number" className="ml-1 text-sm cursor-pointer">
            Number
          </label>

          <input
            type="checkbox"
            id="character"
            className="cursor-pointer ml-2"
            defaultChecked={characterInclude}
            onClick={() => {
              setCharacterInclude((prevCharacterInclude) => !prevCharacterInclude);
            }}
          ></input>
          <label htmlFor="character" className="ml-1 text-sm cursor-pointer">
            Characters
          </label>
        </div>

        <div className="flex items-center justify-center mt-5">
          <button
            ref={generateNewPasswordButton}
            onClick={handleGenerateNewPassword}
            className="px-6 py-1 bg-orange-600 active:bg-orange-700 transition-colors duration-300 text-white font-bold rounded-lg cursor-pointer select-none outline-none"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
