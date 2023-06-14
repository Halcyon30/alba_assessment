import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./LoginForm";
import TokenPage from "./tokenpage";
import Home from "./Home";

function App() {
  const [token, setToken] = useState(""); // Add token state and setter function

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<LoginForm setToken={setToken} />} />
        <Route exact path="/token" element={<TokenPage token={token} />} />
      </Routes>
    </Router>
  );
}

export default App;

