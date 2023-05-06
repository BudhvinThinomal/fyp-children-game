import React, { useState } from "react";
import "../App.css";
import Cards from "../components/Home/Cards";

const SignUp = (props) => {
  const { startGame, isGameStarted, closeGame } = props;

  return (
    <>
      <Cards />
    </>
  );
};

export default SignUp;
