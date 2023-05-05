import React, { useState, useEffect } from "react";
import { Stage, Sprite } from "@inlet/react-pixi";
import { Dialog, Slide, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as PIXI from "pixi.js";
import backgroundImage from "../assets/background/background1.png";
import itemImage from "../assets/Snitch.png";
import cursorImage from "../assets/Wand.png";
import chalkBoard from "../assets/QuestionBG.png";

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
});

const GameView = () => {
  const [itemPosition, setItemPosition] = useState({
    x: Math.random() * (window.innerWidth - 2 * 100) + 100,
    y: Math.random() * (window.innerHeight - 2 * 100) + 100,
  });
  const [won, setWon] = useState(false);
  const classes = useStyles();

  const handleBackgroundClick = (event) => {
    setItemPosition({
      x: event.data.global.x - ITEM_SIZE / 2,
      y: event.data.global.y - ITEM_SIZE / 2,
    });
    setWon(false);
  };

  const handleRightClick = () => {
    setWon(true);
    ////////////////////////////////////////////////////////////////////////////////////////////////
    setOpen(true);
    ////////////////////////////////////////////////////////////////////////////////////////////////
  };

  const handleResetClick = () => {
    setItemPosition({
      x: Math.random() * (window.innerWidth - 2 * 100) + 100,
      y: Math.random() * (window.innerHeight - 2 * 100) + 100,
    });
    setWon(false);
    ////////////////////////////////////////////////////////////////////////////////////////////////
    setOpen(false);
    ////////////////////////////////////////////////////////////////////////////////////////////////
  };

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

  ///////////////////////////////////////////////////////////////

  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Hide default cursor
    won
      ? (document.body.style.cursor = "pointer")
      : (document.body.style.cursor = "none");
  }, [won]);

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

        {!won && (
          <>
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
          </>
        )}
      </Stage>

      <Dialog
        open={open}
        TransitionComponent={Slide}
        TransitionProps={{ direction: open ? "up" : "down" }}
        transitionDuration={3000}
        fullScreen
        PaperProps={{ style: { backgroundColor: "transparent" } }}
      >
        <div className={classes.paper}>
          <Box
            style={{ backgroundColor: "pink" }}
            p={10}
            mt={25}
            ml={20}
            mr={20}
          >
            Congratulations! You won!
          </Box>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button variant="contained" onClick={handleResetClick}>
              Play again
            </Button>
          </div>
        </div>
      </Dialog>
    </Box>
  );
};

export default GameView;
