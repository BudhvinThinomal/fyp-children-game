import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Typography } from "@mui/material";

function Navbar(props) {
  const { startGame } = props;
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <Typography
              style={{
                fontFamily: "Sinhala Title",
                fontSize: "30px",
                fontWeight: 500,
              }}
            >
              wl=re us;=re
            </Typography>
            {/* AKURU MITHURU */}
            <i className="fas fa-quidditch" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "25px",
                    fontWeight: 600,
                  }}
                >
                  uq,a msgqj
                </Typography>
                {/* Home */}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  startGame();
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "25px",
                    fontWeight: 600,
                  }}
                >
                  lS%vdj
                </Typography>
                {/* Game */}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/Parent-hub"
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  startGame();
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "25px",
                    fontWeight: 600,
                  }}
                >
                  uõmsh flakaøh
                </Typography>
                {/* Parent Hub */}
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "25px",
                    fontWeight: 600,
                  }}
                >
                  f;dr;=re
                </Typography>
                {/* About */}
              </Link>
            </li>

            <li>
              <Link
                to="/Log-in"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "25px",
                    fontWeight: 600,
                  }}
                >
                  mqrkh
                </Typography>
                {/* Log In */}
              </Link>
            </li>

            <li>
              <Link
                to="/Sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "25px",
                    fontWeight: 600,
                  }}
                >
                  ,shdmÈxÑh
                </Typography>
                {/* Sign Up */}
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline">
              <Typography
                style={{
                  fontFamily: "Sinhala",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                mqrkh
              </Typography>
              {/* Log In */}
            </Button>
          )}
          {button && (
            <Button buttonStyle="btn--outline">
              <Typography
                style={{
                  fontFamily: "Sinhala",
                  fontSize: "20px",
                  fontWeight: 600,
                }}
              >
                ,shdmÈxÑh
              </Typography>
              {/* Sign Up */}
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
