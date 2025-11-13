import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Register from "../pages/Register";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
