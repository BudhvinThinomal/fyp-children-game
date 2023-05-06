import React, { useState } from "react";
import "../App.css";
import Cards from "../components/Home/Cards";
import GameSection from "../components/Home/GameSection";
import GameView from "../pages/GameView";

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
        </>
      )}
    </>
  );
};

export default Home;
