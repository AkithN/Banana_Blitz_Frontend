import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Auth from "../pages/AuthPage";
import Game from "../pages/GamePage";
import HighScorePage from "../pages/HighScore";
import ProfilePage from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/game/:level" element={<Game />} />
      <Route path="/highscore" element={<HighScorePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
