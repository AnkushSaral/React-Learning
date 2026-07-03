import "./App.css";
import { useState } from "react";
import { Profile, Login } from "./components/";
import {
  LoginContext,
  LoginContextProvider,
  useLogin,
  ProfileContext,
  ProfileContextProvider,
  useProfile,
} from "./contexts/";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const loginCheck = () => {
    if (email && password) {
      setUserName("Ankush Saral");
    }
  };

  return (
    <>
      <h1>Login Component</h1>

      <LoginContextProvider
        value={{
          email,
          setEmail,
          password,
          setPassword,
          userName,
          setUserName,
          loginCheck,
        }}
      >
        <Login />
      </LoginContextProvider>
      <div
        style={{
          backgroundColor: "white",
          width: "100%",
          height: "2px",
          margin: "20px 0",
        }}
      ></div>
      <h1>Profile Component</h1>

      <ProfileContextProvider value={{ userName, setUserName }}>
        <Profile />
      </ProfileContextProvider>
      <h5 style={{ color: "yellow" }}>
        We are not using prop to send data between components
      </h5>

      <div className="context-api-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUGnoDx3yzVtVQpbGxCjameuOkwxgPch-MGm3PmbrjjbkGe21t1Hp1aQ&s=10"
          style={{ borderRadius: "5px" }}
          alt="context-api-image"
        />
      </div>
    </>
  );
}

export default App;
