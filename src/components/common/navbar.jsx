import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-90 border-b border-yellow-400 shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-center items-center py-4 space-x-3">
        {/* Banana Icon */}
        <span className="text-yellow-400 text-3xl animate-bounce">🍌</span>
        {/* Project Name */}
        <h1 className="text-3xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-yellow-400 animate-pulse cursor-pointer">
          BANANA BLITZ
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
