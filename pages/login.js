import axios from "axios";
import React, { useState } from "react";
import Router from "next/router";


export default function Home() {
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mainDivStyle = {
    padding: "1em",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    maxWidth: "560px",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { email, password };

    const res = await axios.post("/api/auth/login", credentials);
    if (!res.ok){
    console.log('Wrong')
    }
  
    Router.push('/dashboard')

  };

  const handleGetUser = async () => {
    const user = await axios.get("/api/user");

    console.log(user);
  };

  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");

    console.log(user);
  };

  return (
    <div style={mainDivStyle}>
      <form style={formStyle} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="username"> Username </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password"> Username </label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button> Log in </button>
      </form>

      <button onClick={() => handleGetUser()}> User </button>

      <button onClick={() => handleLogOut()}> Logout </button>
    </div>
  );
}