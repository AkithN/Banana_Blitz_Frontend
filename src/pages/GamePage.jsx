import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // IMPORTANT: Use axios directly for puzzle API
import api from "../services/api";

const GamePage = () => {
  const { level } = useParams();
  const navigate = useNavigate();

  const timeSettings = {
    easy: 60,
    normal: 30,
    hard: 15,
  };

  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeLeft, setTimeLeft] = useState(timeSettings[level]);
  const [puzzleImg, setPuzzleImg] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  // -------------------------
  // FETCH PUZZLE FIXED
  // -------------------------
  const fetchPuzzle = async () => {
    try {
      const res = await axios.get("https://marcconrad.com/uob/banana/api.php");

      setPuzzleImg(res.data.question);
      setCorrectAnswer(res.data.solution);
      setLoading(false);
    } catch (err) {
      console.error("Puzzle API Error:", err);
    }
  };

  useEffect(() => {
    fetchPuzzle();
  }, [questionNumber]);

  // -------------------------
  // TIMER HANDLING
  // -------------------------
  useEffect(() => {
    if (timeLeft <= 0) {
      handleAnswerSubmit(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  // -------------------------
  // SCORING SYSTEM
  // -------------------------
  const calculatePoints = (timeUsed) => {
    if (timeUsed <= 5) return 30;
    if (timeUsed <= 15) return 20;
    if (timeUsed <= 25) return 10;
    return 5;
  };

  // -------------------------
  // SUBMIT ANSWER
  // -------------------------
  const handleAnswerSubmit = (timeUp = false) => {
    let userAnswer = parseInt(answer);
    let message = "";
    let gainedPoints = 0;

    if (timeUp) {
      message = "⏳ Time's up! No points.";
    } else if (userAnswer === correctAnswer) {
      let timeUsed = timeSettings[level] - timeLeft;
      gainedPoints = calculatePoints(timeUsed);
      message = `✅ Correct! +${gainedPoints} points`;
      setScore((prev) => prev + gainedPoints);
    } else {
      message = "❌ Incorrect!";
    }

    setResult(message);

    // Load next question
    setTimeout(() => {
      if (questionNumber < 10) {
        setQuestionNumber((prev) => prev + 1);
        setTimeLeft(timeSettings[level]);
        setAnswer("");
        setResult("");
        setLoading(true);
      } else {
        finishGame();
      }
    }, 1500);
  };

  // -------------------------
  // SAVE SCORE TO BACKEND
  // -------------------------
  const finishGame = async () => {
    try {
      await api.post("/save-score", {
        mode: level,
        score: score,
        questions: 10,
      });

      navigate("/highscore", { state: { score } });
    } catch (error) {
      console.error("Score save error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 to-orange-500 flex flex-col items-center py-10 font-arimo">
      {/* Top Bar */}
      <div className="w-11/12 md:w-3/4 mb-6 flex justify-between items-center">
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-white px-4 py-2 rounded-full shadow"
        >
          ← Back
        </button>

        <p className="text-white font-bold text-lg uppercase">
          Question {questionNumber}/10
        </p>

        <div className="bg-white rounded-full px-4 py-2 shadow text-gray-800">
          ⏳ {timeLeft}s
        </div>
      </div>

      {/* Game Card */}
      <div className="bg-white w-11/12 md:w-3/4 rounded-xl shadow-lg p-6 text-center">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          Banana Puzzle
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Solve this puzzle as fast as you can!
        </p>

        {loading ? (
          <p className="text-gray-500">Loading puzzle...</p>
        ) : (
          <img
            src={puzzleImg}
            alt="Puzzle"
            className="mx-auto w-full max-w-lg rounded-lg shadow"
          />
        )}

        {/* Answer */}
        <input
          type="number"
          placeholder="Enter answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border w-full mt-6 px-4 py-2 rounded-lg shadow-sm"
        />

        {/* Submit */}
        <button
          onClick={() => handleAnswerSubmit(false)}
          className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium px-4 py-2 rounded-md w-full transition"
        >
          Submit Answer
        </button>

        {result && (
          <p className="text-lg font-semibold mt-4 text-gray-800">{result}</p>
        )}

        <p className="text-lg font-bold mt-4 text-gray-700">Score: {score}</p>
      </div>
    </div>
  );
};

export default GamePage;
