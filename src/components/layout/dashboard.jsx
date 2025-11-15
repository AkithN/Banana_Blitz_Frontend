import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBolt, FaBullseye, FaTrophy } from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate();

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
    <div className="min-h-[75vh] bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center py-10 font-arimo">
      {/* Navigation */}
      <div className="w-11/12 md:w-3/4 bg-gray-100 rounded-full flex justify-around items-center text-sm shadow-md mb-6 p-1">
        <button
          // onClick={() => navigate("/dashboard")}
          className="w-1/3 py-2 rounded-full text-gray-800 bg-white shadow"
        >
          New Game
        </button>
        <button
          onClick={() => navigate("/highscore")}
          className="w-1/3 py-2 rounded-full text-gray-800"
        >
          High Scores
        </button>
        <button
          onClick={() => navigate("/profile")}
          className="w-1/3 py-2 rounded-full text-gray-800"
        >
          Profile
        </button>
      </div>

      {/* Difficulty Section */}
      <div className="bg-white w-11/12 md:w-3/4 rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-1 text-gray-800">
          Choose Your Level
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Select a difficulty level and test your puzzle-solving skills!
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((level, index) => (
            <div
              key={index}
              className="border rounded-xl overflow-hidden shadow-sm"
            >
              <div
                className={`${level.color} flex justify-center items-center py-6`}
              >
                {level.icon}
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800">{level.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{level.time}</p>
                <p className="text-sm text-gray-600 mb-2">
                  <span className="font-semibold">High Score:</span>{" "}
                  {level.highScore}
                </p>
                <button
                  className={`${level.buttonColor} text-white font-medium px-4 py-2 w-full rounded-md transition`}
                  onClick={() => navigate(`/game/${level.name.toLowerCase()}`)}
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
