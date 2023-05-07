import React, { useState } from "react";
import ParentForm from "../components/ParentHub/ParentForm";

const ParentHub = (props) => {
  const { startGame, isGameStarted, closeGame } = props;

  return (
    <>
      <ParentForm />
    </>
  );
};

export default ParentHub;
