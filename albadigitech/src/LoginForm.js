import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./loginform.css";

function LoginForm({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  async function submit() {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setUserData(result);
        setErrorMessage("");
        setToken(result.token);
        navigate("/token");
      } else {
        setUserData(null);
        setErrorMessage(result.error || "Terjadi kesalahan saat autentikasi");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat memanggil API:", error);
      setErrorMessage("Terjadi kesalahan saat memanggil API");
    }
  }

  return (
    <div className="cover">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={submit} className="login-btn">
        Login
      </button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default LoginForm;
