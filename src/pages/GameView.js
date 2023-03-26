import React, { useState, useEffect } from "react";
import { Stage, Sprite } from "@inlet/react-pixi";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import * as PIXI from "pixi.js";
import backgroundImage from "../assets/background/background1.png";
import itemImage from "../assets/Snitch.png";
import cursorImage from "../assets/Wand.png";

const ITEM_SIZE = 50;

const useStyles = makeStyles({
  stage: {
    backgroundColor: "#1e1e1e",
  },
  resetButton: {
    marginTop: 10,
  },
});

const GameView = () => {
  const [itemPosition, setItemPosition] = useState({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
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
    console.log("Done");
  };

  const handleResetClick = () => {
    setItemPosition({
      x: Math.random() * (window.innerWidth - 2 * 100) + 100,
      y: Math.random() * (window.innerHeight - 2 * 100) + 100,
    });
    setWon(false);
  };

  //   useEffect(() => {
  //     const app = new PIXI.Application({});

  //     // Import and create custom cursor sprite
  //     const customCursor = new PIXI.Sprite(PIXI.Texture.from(cursorImage));

  //     // Hide default cursor
  // document.body.style.cursor = "none";

  //     // Update custom cursor position on mouse move
  //     const handleMouseMove = (e) => {
  //       customCursor.position.set(e.clientX, e.clientY);
  //     };
  //     window.addEventListener("mousemove", handleMouseMove);

  //     // Add custom cursor to stage
  //     app.stage.addChild(customCursor);

  //     // Append PIXI app view to container element
  //     document.getElementById("game-container").appendChild(app.view);

  //     return () => {
  //       // Remove event listener on cleanup
  //       window.removeEventListener("mousemove", handleMouseMove);
  //     };
  //   }, []);

  const centerAnchor = new PIXI.Point(0.2, 0);

  const [mouse, setMouse] = useState({
    mouseX: 0,
    mouseY: 0,
  });

  // Hide default cursor
  document.body.style.cursor = "none";

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

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      id="game-container"
    >
      {!won && (
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
            name="vacuumHead"
            fill={0xffffff}
            x={mouse.mouseX}
            y={mouse.mouseY}
            width={150}
            height={175}
            anchor={centerAnchor}
            texture={PIXI.Texture.from(cursorImage)}
          />
        </Stage>
      )}
      {won && (
        <Box>
          <p>You won!</p>
          <Button
            variant="contained"
            onClick={handleResetClick}
            className={classes.resetButton}
          >
            Reset
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default GameView;
