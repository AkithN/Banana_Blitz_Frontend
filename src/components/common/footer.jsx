import React from "react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-400 text-gray-300 h-[15vh] py-10 font-arimo">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-2">
        {/* Logo / Name with Banana */}
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 text-2xl animate-bounce">🍌</span>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-yellow-400">
            BANANA BLITZ
          </h2>
        </div>

        {/* Design Credit */}
        <p className="flex items-center text-sm tracking-wide">
          Designed with <FaHeart className="text-pink-500 mx-1 animate-pulse" />{" "}
          by{" "}
          <span className="text-yellow-400 font-semibold ml-1">
            Akith Nimpura
          </span>
        </p>
      </div>

      {/* Glowing bottom line */}
      <div className="mt-4 h-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-yellow-400 animate-pulse"></div>
    </footer>
  );
};

export default Footer;
