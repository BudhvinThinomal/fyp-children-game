import React, { lazy, useEffect, useState, Suspense } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, CircularProgress, Backdrop } from "@mui/material";
import "./App.css";
import Navbar from "./components/Common/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CacheBuster from "react-cache-buster";
import * as packageInfo from "../package.json";
import Footer from "./components/Common/Footer";

const theme = createTheme();

const Home = lazy(() => import("./pages/Home"));
const ParentHub = lazy(() => import("./pages/ParentHub"));
const About = lazy(() => import("./pages/About"));
const LogIn = lazy(() => import("./pages/LogIn"));
const SignUp = lazy(() => import("./pages/SignUp"));

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  };

  const closeGame = () => {
    setGameStarted(false);
  };

  const isProduction = process.env.NODE_ENV === "production";

  let pkgInfo = packageInfo;

  return (
    <CacheBuster
      currentVersion={pkgInfo.version}
      isEnabled={isProduction} //If false, the library is disabled.
      isVerboseMode={false} //If true, the library writes verbose logs to console.
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Suspense
            fallback={
              <Backdrop open={true}>
                <CircularProgress size={60} />
              </Backdrop>
            }
          >
            {!gameStarted && <Navbar startGame={startGame} />}

            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    startGame={startGame}
                    isGameStarted={gameStarted}
                    closeGame={closeGame}
                  />
                }
              />
              <Route path="/Parent-hub" element={<ParentHub />} />
              <Route path="/About" element={<About />} />
              <Route path="/Log-in" element={<LogIn />} />
              <Route path="/Sign-up" element={<SignUp />} />
            </Routes>
            {!gameStarted && <Footer />}
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </CacheBuster>
  );
}

export default App;
