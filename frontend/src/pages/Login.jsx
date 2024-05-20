import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiAuth } from "../services/apiAuth";

const Login = () => {
  const navigate = useNavigate();
  const [isLogingIn, setIsLogingIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLogingIn(true);
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    const response = await apiAuth({ username, password });

    if (response.status == "success" && response.data.role === "admin") {
      navigate("/admin/dashboard");
    } else if (response.status == "success" && response.data.role === "user") {
      navigate("/");
    } else if (response.status == "error") {
      setIsLogingIn(false);
    }
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-100 text-gray-500">
      <h1 className="text-2xl">Login</h1>

      <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="rounded-md px-4 py-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="rounded-md px-4 py-2"
          required
        />
        <button
          className="rounded-md bg-blue-500 px-4 py-2 text-white"
          type="submit"
          disabled={isLogingIn}
        >
          {isLogingIn ? "Login In..." : "Login"}
        </button>

        <div className="mt-4 flex gap-4">
          <p>Don&apos;t have an account?</p>
          <a href="/signup" className="text-blue-500">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
