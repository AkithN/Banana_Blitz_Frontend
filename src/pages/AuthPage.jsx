"use client";
import React, { useState } from "react";
import BananaIcon from "../assets/icons/logo.png";
import api from "../services/api"; // import Axios instance

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/login", {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("auth_token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful!");
      window.location.href = "/dashboard";
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/register", {
        username: form.username,
        email: form.email,
        password: form.password,
      });

      alert("Account Created! Please login.");
      setActiveTab("login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-400 to-orange-500 font-arimo">
      {/* Logo */}
      <div className="text-center mb-8">
        <img src={BananaIcon} alt="Banana" className="w-12 h-12 mb-3" />
        <h1 className="text-3xl font-bold text-white">Banana Blitz</h1>
        <p className="text-white/80 text-sm">Fast-paced puzzle game</p>
      </div>

      {/* Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-[30%] min-w-[330px]">
        <h2 className="text-center font-semibold text-lg mb-2">Welcome!</h2>
        <p className="text-center text-gray-500 text-sm mb-4">
          Login or create an account to start playing
        </p>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-full mb-6 p-1">
          <button
            onClick={() => setActiveTab("login")}
            className={`w-1/2 py-2 font-medium rounded-full transition ${
              activeTab === "login"
                ? "bg-white text-gray-800 shadow"
                : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`w-1/2 py-2 font-medium rounded-full transition ${
              activeTab === "register"
                ? "bg-white text-gray-800 shadow"
                : "text-gray-500"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* LOGIN FORM */}
        {activeTab === "login" && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-200 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Password</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-200 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-md"
            >
              {loading ? "Please wait..." : "Login"}
            </button>
          </form>
        )}

        {/* REGISTER FORM */}
        {activeTab === "register" && (
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600">Username</label>
              <input
                name="username"
                type="text"
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-200 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                name="email"
                type="email"
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-200 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600">Password</label>
              <input
                name="password"
                type="password"
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-200 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-2 rounded-md"
            >
              {loading ? "Please wait..." : "Sign Up"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
