"use client";
import React, { useState } from "react";
import BananaIcon from "../assets/icons/logo.png";
import Swal from "sweetalert2";
import api from "../services/api"; // Axios instance

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [otpForm, setOtpForm] = useState({ user_id: "", otp: "" });
  const [showOtp, setShowOtp] = useState(false);

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

      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back!",
        timer: 2000,
        showConfirmButton: false,
      });

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response?.data?.message || "Login failed",
      });
    }

    setLoading(false);
  };

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/register", {
        username: form.username,
        email: form.email,
        password: form.password,
      });

      Swal.fire({
        icon: "success",
        title: "Account Created!",
        text: "Check your email for the OTP.",
        timer: 3000,
        showConfirmButton: false,
      });

      setOtpForm({ user_id: res.data.user_id, otp: "" });
      setShowOtp(true);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response?.data?.message || "Registration failed",
      });
    }

    setLoading(false);
  };

  // VERIFY OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/verify-otp", {
        user_id: otpForm.user_id,
        otp: otpForm.otp,
      });

      Swal.fire({
        icon: "success",
        title: "Email Verified!",
        text: "You can now login.",
        timer: 2000,
        showConfirmButton: false,
      });

      setShowOtp(false);
      setActiveTab("login");
      setForm({ username: "", email: "", password: "" });
      setOtpForm({ user_id: "", otp: "" });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Invalid OTP",
        text: err.response?.data?.message || "Please try again",
      });
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
            onClick={() => {
              setActiveTab("login");
              setShowOtp(false);
            }}
            className={`w-1/2 py-2 font-medium rounded-full transition ${
              activeTab === "login"
                ? "bg-white text-gray-800 shadow"
                : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setActiveTab("register");
              setShowOtp(false);
            }}
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

        {/* REGISTER FORM or OTP FORM */}
        {activeTab === "register" && (
          <>
            {showOtp ? (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600">
                    Enter OTP
                  </label>
                  <input
                    name="otp"
                    type="text"
                    value={otpForm.otp}
                    onChange={(e) =>
                      setOtpForm({ ...otpForm, otp: e.target.value })
                    }
                    className="w-full mt-1 p-2 border border-gray-200 rounded-md"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-2 rounded-md"
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>

                {/* Resend OTP button */}
                <button
                  type="button"
                  onClick={async () => {
                    setLoading(true);
                    try {
                      await api.post("/resend-otp", {
                        user_id: otpForm.user_id,
                      });
                      Swal.fire({
                        icon: "success",
                        title: "OTP Resent!",
                        text: "Check your email for the new OTP.",
                        timer: 2000,
                        showConfirmButton: false,
                      });
                    } catch (err) {
                      Swal.fire({
                        icon: "error",
                        title: "Error",
                        text:
                          err.response?.data?.message || "Could not resend OTP",
                      });
                    }
                    setLoading(false);
                  }}
                  className="w-full mt-2 text-sm text-blue-600 hover:underline"
                >
                  Resend OTP
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600">
                    Username
                  </label>
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
                  <label className="block text-sm text-gray-600">
                    Password
                  </label>
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
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
