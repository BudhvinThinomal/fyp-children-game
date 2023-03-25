import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import GameView from "./components/GameView";
import Home from "./components/Home";

const theme = createTheme();

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleReset = () => {
    setGameStarted(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {gameStarted ? (
        <GameView onReset={handleReset} />
      ) : (
        <Home open={true} onClose={() => {}} onStart={handleStart} />
      )}
    </ThemeProvider>
  );
}

export default App;
