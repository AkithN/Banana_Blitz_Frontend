import React from "react";
import { FaBolt, FaBullseye, FaTrophy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HighScore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[75vh] bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center py-10 font-arimo">
      {/* Navigation Tabs */}
      <div className="w-11/12 md:w-3/4 bg-gray-100 rounded-full flex justify-around items-center text-sm shadow-md mb-6 p-1">
        <button
          onClick={() => navigate("/dashboard")}
          className="w-1/3 py-2 rounded-full text-gray-800"
        >
          New Game
        </button>
        <button className="w-1/3 py-2 rounded-full text-gray-800 bg-white shadow">
          High Scores
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="w-1/3 py-2 rounded-full text-gray-800"
        >
          Profile
        </button>
      </div>

      {/* High Scores Section */}
      <div className="bg-white w-11/12 md:w-3/4 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800">High Scores</h2>
        <p className="text-gray-500 text-sm">
          Your best performances across all levels
        </p>

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
          <p className="mt-2">
            No scores yet. Start playing to set your first record!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighScore;
