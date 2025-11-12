import React, { useContext, useState } from "react";
import { login } from "../service/authService.js";
import { AppContext } from "../context/AppContext.jsx";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const {baseURL} = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const credentials = { userName, password };
      const res = await login(baseURL, credentials);

      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={{ maxWidth: 300, margin: "auto" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
