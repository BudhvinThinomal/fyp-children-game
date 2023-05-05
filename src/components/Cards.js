import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import ParentHub from "../assets/Parents.png";
import AboutUs from "../assets/Children.png";

function Cards() {
  return (
    <div className="cards">
      <h1>Find More!!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={ParentHub}
              text="Parent Hub"
              label="Parent"
              path="/Parent-hub"
            />
            <CardItem
              src={AboutUs}
              text="About Dyslexia & Dysgraphia"
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
