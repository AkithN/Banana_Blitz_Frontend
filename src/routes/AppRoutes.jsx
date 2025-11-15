import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
// import Register from "../pages/Register";
import Auth from "../pages/AuthPage";
import HighScorePage from "../pages/HighScore";
import ProfilePage from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/dashboard" element={<Home />} />
      <Route path="/highscore" element={<HighScorePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
