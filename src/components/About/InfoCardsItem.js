import React from "react";
import { Link } from "react-router-dom";

function InfoCardsItem(props) {
  return (
    <>
      <li className="InfoCards__item">
        <div className="InfoCards__item__info">
          <h4 className="InfoCards__item__title">{props.title}</h4>
          <h5 className="InfoCards__item__text">{props.text}</h5>
        </div>
      </li>
    </>
  );
}

export default InfoCardsItem;
