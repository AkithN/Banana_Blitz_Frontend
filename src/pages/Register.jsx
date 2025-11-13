"use client";
import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-yellow-400 to-orange-500">
      {/* Logo and Title */}
      <div className="text-center mb-8">
        <div className="flex justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2909/2909763.png"
            alt="Banana Icon"
            className="w-12 h-12 mb-3"
          />
        </div>
        <h1 className="text-3xl font-bold text-white">Banana Blitz</h1>
        <p className="text-white/80 text-sm">Fast-paced puzzle game</p>
      </div>

      {/* Register Card */}
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <h2 className="text-center font-semibold text-lg mb-2">Welcome!</h2>
        <p className="text-center text-gray-500 text-sm mb-4">
          Login or create an account to start playing
        </p>

        {/* Tabs */}
        <div className="flex bg-gray-100 rounded-full mb-6">
          <button className="w-1/2 py-2 text-gray-500 font-medium hover:text-gray-700">
            Login
          </button>
          <button className="w-1/2 py-2 bg-white rounded-full font-medium text-gray-800 shadow">
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Username</label>
            <input
              type="text"
              placeholder="bananafan123"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-gray-900 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
