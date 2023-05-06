import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import ParentHub from "../assets/Parents.png";
import AboutUs from "../assets/Children.png";
import { Typography } from "@mui/material";

function Cards() {
  return (
    <div className="cards">
      <Typography variant="h3">jeäÿr f;dr;=reææ</Typography>
      {/* <h1>Find More!!</h1> */}
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={ParentHub}
              text={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "25px",
                    fontWeight: 600,
                  }}
                >
                  {"uõmsh flakaøh"}
                </Typography>
              }
              label="Parent"
              path="/Parent-hub"
            />
            <CardItem
              src={AboutUs}
              text={
                <Typography
                  style={{
                    fontFamily: "Sinhala",
                    fontSize: "25px",
                    fontWeight: 600,
                  }}
                >
                  {"äiaf,laishd iy äia.%d*shd ms<sn| f;dr;=re"}
                </Typography>
              }
              label="Parent"
              path="/About"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
