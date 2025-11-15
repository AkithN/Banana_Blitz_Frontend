import React from "react";
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import HighScore from "../components/layout/highscore";

const HighScorePage = () => {
  return (
    <div>
      <Header />
      <HighScore />
      <Footer />
    </div>
  );
};

export default HighScorePage;
