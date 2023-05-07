import React from "react";
import "./ParentForm.css";
import { Typography } from "@mui/material";

function ParentForm() {
  return (
    <div className="ParentForm">
      <div className="ParentForm__container">
        <div className="ParentForm__wrapper">
          <ul className="ParentForm__items">
            <li className="ParentForm__item">
              <div className="ParentForm__item__info">
                <h4 className="ParentForm__item__title">Beo</h4>
                <h5 className="ParentForm__item__text">bob</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ParentForm;
