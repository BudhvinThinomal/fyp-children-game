import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./GameSection.css";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  stage: {
    backgroundColor: "#1e1e1e",
  },
});

const GameSection = ({ onClick }) => {
  const classes = useStyles();

  return (
    <div className="game-container">
      <Typography variant="h1">;%dih Un tk;=re n,d isgshs</Typography>
      <Typography variant="h5">wehs ;j;A n,d isgskAfka @</Typography>
      {/* <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p> */}
      <div className="game-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={onClick}
        >
          <Typography
            style={{
              fontFamily: "Sinhala",
              fontSize: "30px",
              fontWeight: 600,
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
            variant="h6"
          >
            lS%vd lruq
          </Typography>
          {/* LET'S PLAY */}
        </Button>
      </div>
    </div>
  );
};

export default GameSection;
