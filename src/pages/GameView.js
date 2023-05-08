import React, { useState, useEffect } from "react";
import { Stage, Sprite } from "@inlet/react-pixi";
import { Dialog, Slide, Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as PIXI from "pixi.js";
import backgroundImage1 from "../assets/background/background1.png";
import backgroundImage2 from "../assets/background/background2.png";
import backgroundImage3 from "../assets/background/background3.png";
import backgroundImage4 from "../assets/background/background4.png";
import backgroundImage5 from "../assets/background/background5.png";
import backgroundImage6 from "../assets/background/background6.png";
import backgroundImage7 from "../assets/background/background7.png";
import backgroundImage8 from "../assets/background/background8.png";
import backgroundImage9 from "../assets/background/background9.png";
import backgroundImage10 from "../assets/background/background10.png";
import backgroundImage14 from "../assets/background/background14.png";
import itemImage from "../assets/Snitch.png";
import cursorImage from "../assets/Wand.png";
import chalkBoard from "../assets/QuestionBG.png";
import CloseButton from "../assets/close.png";
import Questions from "../components/Game/Questions";
import { useNavigate } from "react-router-dom";
import snitch from "../assets/Snitch.png";

const ITEM_SIZE = 50;

const useStyles = makeStyles({
  stage: {
    backgroundColor: "#1e1e1e",
  },
  resetButton: {
    marginTop: 10,
  },
  paper: {
    backgroundImage: `url(${chalkBoard})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  },
  closeButton: {
    width: "20%",
    margin: "20px",
    backgroundColor: "transparent",
    color: "#fff",
    padding: "8px 20px",
    borderRadius: "4px",
    border: "none",
    "&:hover": {
      transition: "all 0.3s ease-out",
      backgroundColor: "#242424",
    },
  },
});

const GameView = (props) => {
  const { closeGame } = props;

  const [backgroundImage, setBackgroundImage] = useState(backgroundImage1);

  const [itemPosition, setItemPosition] = useState({
    x: Math.random() * (window.innerWidth - 2 * 100) + 100,
    y: Math.random() * (window.innerHeight - 2 * 100) + 100,
  });
  const [won, setWon] = useState(false);

  const [quesSet, setQuesSet] = useState(0);

  const classes = useStyles();

  const navigate = useNavigate();

  const [welcome, setWelcome] = useState(true);

  const [finish, setFinish] = useState(false);

  const handleFinishClick = () => {
    setQuesSet(0);
    setFinish(false);
    closeGame();
    navigate("/Parent-hub");
  };

  const handleRightClick = () => {
    setWon(true);
  };

  const handleResetClick = () => {
    setItemPosition({
      x: Math.random() * (window.innerWidth - 2 * 100) + 100,
      y: Math.random() * (window.innerHeight - 2 * 100) + 100,
    });

    setWon(false);

    let newBackgroundImage = "";

    switch (quesSet) {
      case 0:
        newBackgroundImage = backgroundImage2;
        break;
      case 1:
        newBackgroundImage = backgroundImage3;
        break;
      case 2:
        newBackgroundImage = backgroundImage4;
        break;
      case 3:
        newBackgroundImage = backgroundImage5;
        break;
      case 4:
        newBackgroundImage = backgroundImage6;
        break;
      case 5:
        newBackgroundImage = backgroundImage7;
        break;
      case 6:
        newBackgroundImage = backgroundImage8;
        break;
      case 7:
        newBackgroundImage = backgroundImage9;
        break;
      case 8:
        newBackgroundImage = backgroundImage10;
        break;
      default:
        newBackgroundImage = backgroundImage14;
        break;
    }

    setBackgroundImage(newBackgroundImage);
    setTimeout(() => {
      setQuesSet(quesSet + 1);
    }, 3000); // replace 3000 with the desired timeout in milliseconds
  };

  useEffect(() => {
    if (quesSet > 9) {
      document.body.style.cursor = "pointer";
      setFinish(true);
    }
  }, [quesSet]);

  const centerAnchor = new PIXI.Point(0.2, 0);

  const [mouse, setMouse] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  useEffect(() => {
    // Update custom cursor position on mouse move
    const handleMouseMove = (event) => {
      event.stopPropagation();
      event.preventDefault();
      setMouse({
        mouseX: event.clientX,
        mouseY: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    // Hide default cursor
    won
      ? (document.body.style.cursor = "pointer")
      : (document.body.style.cursor = "none");
  }, [won]);

  const [quitGame, setQuitGame] = useState(false);

  const handleCloseClick = () => {
    document.body.style.cursor = "pointer";
    setQuitGame(true);
  };

  const handleCloseYesClick = () => {
    setQuesSet(0);
    setQuitGame(false);
    closeGame();
  };

  const handleCloseNoClick = () => {
    document.body.style.cursor = "none";
    setQuitGame(false);
  };

  const handleWelcomeClick = () => {
    document.body.style.cursor = "none";
    setWelcome(false);
  };

  useEffect(() => {
    if (welcome) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "none";
    }
  }, [welcome]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      id="game-container"
    >
      <Stage
        className={classes.stage}
        width={window.innerWidth}
        height={window.innerHeight}
        interactive={true}
      >
        <Sprite
          texture={PIXI.Texture.from(backgroundImage)}
          width={window.innerWidth}
          height={window.innerHeight}
        />

        {!won && quesSet < 10 && (
          <>
            <Sprite
              texture={PIXI.Texture.from(CloseButton)}
              x={window.innerWidth - 75} // subtract 85 from the width to position it on the right edge
              y={5}
              width={75}
              height={70}
              interactive={true}
              pointerdown={(e) => {
                handleCloseClick();
              }}
            />
            <Sprite
              texture={PIXI.Texture.from(itemImage)}
              x={itemPosition.x}
              y={itemPosition.y}
              width={90}
              height={ITEM_SIZE}
              interactive={true}
              pointerdown={(e) => {
                handleRightClick();
              }}
            />

            {!quitGame && (
              <Sprite
                name="wand"
                fill={0xffffff}
                x={mouse.mouseX}
                y={mouse.mouseY}
                width={150}
                height={175}
                anchor={centerAnchor}
                texture={PIXI.Texture.from(cursorImage)}
              />
            )}
          </>
        )}
      </Stage>

      <Dialog
        open={quitGame}
        TransitionComponent={Slide}
        TransitionProps={{ direction: quitGame ? "up" : "down" }}
        transitionDuration={3000}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            minWidth: "600px",
            height: "400px",
          },
        }}
      >
        <div className={classes.paper}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="100%"
            marginTop="auto"
            marginBottom="auto"
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Sinhala",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              {"Tng fuu l%Svdj wjika l< hq;=o@"}
              {/* ඔබට මෙම ක්‍රීඩාව අවසන් කළ යුතුද?  */}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <button
                onClick={handleCloseYesClick}
                className={classes.closeButton}
              >
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    display: "inline-block",
                  }}
                >
                  Tõ
                  {/* Yes */}
                </Typography>
              </button>
              <button
                onClick={handleCloseNoClick}
                className={classes.closeButton}
              >
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    display: "inline-block",
                  }}
                >
                  ke;
                  {/* No */}
                </Typography>
              </button>
            </div>
          </Box>
        </div>
      </Dialog>

      <Dialog
        open={won}
        TransitionComponent={Slide}
        TransitionProps={{ direction: won ? "up" : "down" }}
        transitionDuration={3000}
        fullScreen
        PaperProps={{ style: { backgroundColor: "transparent" } }}
      >
        <div className={classes.paper}>
          <Questions handleResetClick={handleResetClick} quesSet={quesSet} />
        </div>
      </Dialog>
      <Dialog
        open={welcome}
        TransitionComponent={Slide}
        TransitionProps={{ direction: welcome ? "up" : "down" }}
        transitionDuration={3000}
        PaperProps={{ style: { backgroundColor: "transparent" } }}
        fullScreen
      >
        <div className={classes.paper}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="100%"
            marginTop="auto"
            marginBottom="auto"
          >
            <Typography
              variant="h2"
              style={{
                fontFamily: "Sinhala",
                fontWeight: 600,
                color: "#fff",
                margin: "4rem",
              }}
            >
              <span>
                <span
                  style={{
                    fontFamily: "Sinhala",
                  }}
                >
                  {`idorfhka ms<s.kq ,nkjdææ`}
                </span>
              </span>
            </Typography>

            <Typography
              variant="h4"
              style={{
                fontFamily: "Sinhala",
                fontWeight: 600,
                color: "#fff",
                margin: "2rem",
              }}
            >
              <span>
                <span
                  style={{
                    fontFamily: "Sinhala",
                  }}
                >
                  {`my; rEmfha we;s ˜‍f.da,avka iaksÉ˜‍ tl fuu l%Svdfõ we;s úúO ia:dkhkays ieÕù we;'`}
                </span>
                <br />
                <span
                  style={{
                    fontFamily: "Sinhala",
                  }}
                >
                  {`Tng mejfrk ld¾hh jkafka" fuu ˜‍f.da,avka iaksÉ˜‍ tl tu ieÕù we;s ia:dkhka j,ska fiùuhs'`}
                </span>
              </span>
              {/* පහත රූපයේ ඇති "ගෝල්ඩන් ස්නිච්" එක මෙම ක්‍රීඩාවේ ඇති විවිධ ස්ථානයන්හි සැඟවී ඇත. ඔබට පැවරෙන කාර්යය වන්නේ, මෙම "ගෝල්ඩන් ස්නිච්" එක එම සැඟවී ඇති ස්ථානයන් වලින් සෙවීමයි.*/}
            </Typography>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginLeft: "4rem",
              }}
            >
              <img src={snitch} alt="" width={150} height={100} />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <button
                onClick={handleWelcomeClick}
                className={classes.closeButton}
                style={{ width: "20vw" }}
              >
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    display: "inline-block",
                  }}
                >
                  wdrïN lruq
                  {/* ආරම්භ කරමු */}
                </Typography>
              </button>
            </div>
          </Box>
        </div>
      </Dialog>

      <Dialog
        open={finish}
        TransitionComponent={Slide}
        TransitionProps={{ direction: finish ? "up" : "down" }}
        transitionDuration={3000}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            minWidth: "600px",
            height: "400px",
          },
        }}
      >
        <div className={classes.paper}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            textAlign="center"
            height="100%"
            marginTop="auto"
            marginBottom="auto"
          >
            <Typography
              variant="h4"
              style={{
                fontFamily: "Sinhala",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              <span>
                <span
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "34px",
                  }}
                >
                  {`iqN me;=ïææ`}
                </span>
                <br />
                <span
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "28px",
                  }}
                >
                  {`Tn fuu l%Svdj id¾:lj wjika l<d'`}
                </span>
              </span>
              {/* සුභ පැතුම්!! ඔබ මෙම ක්‍රීඩාව සාර්ථකව අවසන් කළා.*/}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <button
                onClick={handleFinishClick}
                className={classes.closeButton}
                style={{ width: "20vw" }}
              >
                <Typography
                  variant="h5"
                  style={{
                    fontFamily: "Sinhala",
                    fontWeight: 600,
                    display: "inline-block",
                  }}
                >
                  bÈßhg hkak
                  {/* ඉදිරියට යන්න */}
                </Typography>
              </button>
            </div>
          </Box>
        </div>
      </Dialog>
    </Box>
  );
};

export default GameView;
