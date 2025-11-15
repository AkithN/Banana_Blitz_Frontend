"use client";
import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2";

const Header = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Get user data from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username) {
      setUsername(user.username);
    }
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f59e0b", // orange
      cancelButtonColor: "#d1d5db", // gray
      confirmButtonText: "Yes, logout!",
      reverseButtons: true,
      position: "center", // ensures it is in the center
    }).then((result) => {
      if (result.isConfirmed) {
        // Clear localStorage and redirect
        localStorage.removeItem("user");
        localStorage.removeItem("auth_token");
        Swal.fire({
          icon: "success",
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          showConfirmButton: false,
          timer: 1500,
          backdrop: false,
          position: "center",
        }).then(() => {
          window.location.href = "/"; // redirect to login page
        });
      }
    });
  };

  return (
    <section className="w-full h-[10vh] bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 flex justify-between items-center px-60 shadow-lg font-arimo">
      {/* Logo & Greeting */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-20">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-2xl font-extrabold flex items-center justify-center md:justify-start gap-3 text-white drop-shadow-md">
            🍌 BANANA BLITZ
          </h1>
          <p className="text-sm md:text-base text-white/90 mt-1">
            Welcome back,{" "}
            <span className="font-semibold">{username || "Player"}!</span>
          </p>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 px-5 py-2 bg-white/90 hover:bg-white transition-all duration-300 text-orange-600 font-semibold rounded-full shadow-md hover:shadow-xl"
      >
        <FiLogOut className="text-xl" />
        Logout
      </button>
    </section>
  );
};

export default Header;
