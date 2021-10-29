import React, { useState } from "react";
import UserData from "./data/UserData";
import "./styles.css";

export default function App() {
  // const adminUser = [
  //   {
  //     email: "v@1.com",
  //     password: "vamshi"
  //   },
  //   {
  //     email: "v@2.com",
  //     password: "vamshi"
  //   }
  // ];
  const [loggedin, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setUser((preValue) => {
      if (name === "name") {
        return {
          name: value,
          email: preValue.email,
          password: preValue.password
        };
      } else if (name === "email") {
        return {
          name: preValue.name,
          email: value,
          password: preValue.password
        };
      } else if (name === "password") {
        return {
          name: preValue.name,
          email: preValue.email,
          password: value
        };
      }
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    UserData.map((x) => {
      return (
        x.email === user.email &&
        x.password === user.password &&
        setLoggedIn(!loggedin)
      );
    });
  }
  const form = (
    <>
      <h1>Hi {user.name}</h1>
      <form className="form" onSubmit={submitHandler}>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="Username"
        />
        <input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
  const welcome = (
    <form style={{ border: "2px dotted" }}>
      <h2>Welcome, {user.name}</h2>
      <h4>Loggin Successful</h4>
      <input
        value="LogOut"
        onClick={() => {
          setUser({
            name: "",
            email: "",
            password: ""
          });
          return setLoggedIn(false);
        }}
      />
    </form>
  );
  return <div className="container">{loggedin ? welcome : form}</div>;
}
