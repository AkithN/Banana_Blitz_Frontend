import React from "react";
import { FaBolt, FaBullseye, FaTrophy } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GiBanana } from "react-icons/gi";

const HighScore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 px-4 py-6 flex justify-center">
      <div className="w-full max-w-5xl">

        {/* Header Card */}
        <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl shadow-lg flex justify-between items-center">
          <div className="flex items-center gap-3">
            <GiBanana className="text-white text-4xl" />
            <div>
              <h1 className="text-2xl font-semibold text-white">Banana Blitz</h1>
              <p className="text-white/90 text-sm">Welcome back, mpakithn!</p>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-lg shadow">
            <FiLogOut className="text-xl" />
            Logout
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white mt-6 rounded-full p-1 flex">
          <button className="flex-1 py-3 text-gray-700 font-medium rounded-full hover:bg-gray-100">
            New Game
          </button>
          <button className="flex-1 py-3 bg-orange-500 text-white font-medium rounded-full shadow">
            High Scores
          </button>
          <button className="flex-1 py-3 text-gray-700 font-medium rounded-full hover:bg-gray-100">
            Profile
          </button>
        </div>

        {/* High Scores Section */}
        <div className="bg-white mt-6 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">High Scores</h2>
          <p className="text-gray-500 text-sm">Your best performances across all levels</p>

          {/* Score Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {/* Easy */}
            <div className="border rounded-xl p-5">
              <div className="flex items-center gap-2 text-gray-700">
                <FaBolt />
                <h3 className="font-medium text-lg">Easy</h3>
              </div>
              <p className="text-3xl font-semibold mt-3">0</p>
              <p className="text-sm text-gray-500">Best score</p>
            </div>

            {/* Normal */}
            <div className="border rounded-xl p-5">
              <div className="flex items-center gap-2 text-gray-700">
                <FaBullseye />
                <h3 className="font-medium text-lg">Normal</h3>
              </div>
              <p className="text-3xl font-semibold mt-3">0</p>
              <p className="text-sm text-gray-500">Best score</p>
            </div>

            {/* Hard */}
            <div className="border rounded-xl p-5">
              <div className="flex items-center gap-2 text-gray-700">
                <FaTrophy />
                <h3 className="font-medium text-lg">Hard</h3>
              </div>
              <p className="text-3xl font-semibold mt-3">0</p>
              <p className="text-sm text-gray-500">Best score</p>
            </div>
          </div>

          {/* Empty State */}
          <div className="flex flex-col items-center mt-10 text-gray-500">
            <FaTrophy className="text-4xl opacity-40" />
            <p className="mt-2">No scores yet. Start playing to set your first record!</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HighScore;
