import React, { useState } from "react";

export default function LoginForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
