import React, { useState } from "react";
import Cards from "../components/Home/Cards";

const ParentHub = (props) => {
  const { startGame, isGameStarted, closeGame } = props;

  return (
    <>
      <Cards />
    </>
  );
};

export default ParentHub;
