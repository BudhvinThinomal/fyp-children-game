import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./GameSection.css";

const GameSection = ({ onClick }) => {
  return (
    <div className="hero-container">
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={onClick}
        >
          LET'S PLAY
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          // onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
};

export default GameSection;
