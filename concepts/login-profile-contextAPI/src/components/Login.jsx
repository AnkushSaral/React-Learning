import React from "react";
import { useLogin } from "../contexts";

export function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    userName,
    setUserName,
    loginCheck,
  } = useLogin();

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        style={{
          border: "1px solid grey ",
          width: "fit-content",
          margin: "auto",
          padding: "20px",
          borderRadius: "5px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {"   "}
        <br />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <label htmlFor="Password">Pass. </label>

          <input
            type="text"
            id="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
            margin: "10px auto",
          }}
          onClick={loginCheck}
        >
          Login
        </button>
      </form>
    </div>
  );
}
