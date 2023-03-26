import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameView from "./pages/GameView";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/GameView" component={GameView} />
          {/* <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
