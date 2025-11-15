import React from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import Dashboard from "../components/layout/dashboard";

const HomePage = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <Footer />
    </div>
  );
};

export default HomePage;
