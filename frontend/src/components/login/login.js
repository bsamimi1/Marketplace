import React, { useState } from "react";

export default function LoginPage() {
  const tempAdmin = {
    email: "test@ualberta.ca",
    password: "test",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (info) => {
    console.log(info);
  };

  const Logout = () => {
    console.log("logout");
  };

  return <div></div>;
}
