import React, { useState } from "react";
import { signup } from "../service/authService.js";
import { useContext } from "react";
import { AppContext } from "../context/AppContext.jsx";

function Signup() {
  const {baseURL} = useContext(AppContext);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = { userName, email, password };
      await signup(baseURL, userData);

      alert("Signup successful! Please login.");
      window.location.href = "/login";
    } catch (err) {
      alert("Signup failed!");
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "auto" }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br /><br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;