"use client";
import React from "react";
import { FiLogOut } from "react-icons/fi";
import { FaBolt, FaBullseye, FaTrophy } from "react-icons/fa";

const Dashboard = () => {
  const levels = [
    {
      name: "Easy",
      time: "60 seconds per question",
      highScore: 0,
      color: "bg-green-500",
      icon: <FaBolt className="text-white text-2xl" />,
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
    {
      name: "Normal",
      time: "30 seconds per question",
      highScore: 0,
      color: "bg-yellow-500",
      icon: <FaBullseye className="text-white text-2xl" />,
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
      name: "Hard",
      time: "15 seconds per question",
      highScore: 0,
      color: "bg-red-500",
      icon: <FaTrophy className="text-white text-2xl" />,
      buttonColor: "bg-red-500 hover:bg-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center py-10">
      {/* Header */}
      <div className="bg-orange-400 w-11/12 md:w-3/4 rounded-xl shadow-lg p-6 flex justify-between items-center text-white mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            🍌 Banana Blitz
          </h1>
          <p className="text-sm">Welcome back, <span className="font-semibold">mpakithn!</span></p>
        </div>
        <button className="bg-white text-orange-600 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100">
          <FiLogOut />
          Logout
        </button>
      </div>

      {/* Navigation */}
      <div className="w-11/12 md:w-3/4 bg-white rounded-full flex justify-around items-center text-sm shadow-md mb-8">
        <button className="py-3 px-8 font-medium text-gray-800 hover:text-orange-500">New Game</button>
        <button className="py-3 px-8 font-medium text-gray-800 hover:text-orange-500">High Scores</button>
        <button className="py-3 px-8 font-medium text-gray-800 hover:text-orange-500">Profile</button>
      </div>

      {/* Difficulty Section */}
      <div className="bg-white w-11/12 md:w-3/4 rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-1 text-gray-800">Choose Your Level</h2>
        <p className="text-sm text-gray-500 mb-6">
          Select a difficulty level and test your puzzle-solving skills!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((level, index) => (
            <div key={index} className="border rounded-xl overflow-hidden shadow-sm">
              <div className={`${level.color} flex justify-center items-center py-6`}>
                {level.icon}
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{level.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{level.time}</p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">High Score:</span> {level.highScore}
                </p>
                <button
                  className={`${level.buttonColor} text-white font-medium px-4 py-2 w-full rounded-md transition`}
                >
                  Play {level.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
