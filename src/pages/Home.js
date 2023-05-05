import React, { useState } from "react";
import "../App.css";
import Cards from "../components/Cards";
import GameSection from "../components/GameSection";
import GameView from "../pages/GameView";
import Footer from "../components/Footer";

const Home = (props) => {
  const { startGame, isGameStarted, closeGame } = props;

  return (
    <>
      {isGameStarted ? (
        <GameView closeGame={closeGame} />
      ) : (
        <>
          <GameSection onClick={startGame} />
          <Cards />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
