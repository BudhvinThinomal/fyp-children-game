import React from "react";
import "./ParentForm.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormFill from "./FormFill";

function ParentForm() {
  return (
    <div className="ParentForm">
      <Accordion className="Accordions">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="AccordionSummary"
        >
          <Typography
            style={{
              fontFamily: "Sinhala",
              fontSize: "35px",
              fontWeight: 600,
            }}
          >
            {"fouõmshka$ /l n,d .kakd$ .=rejre i|yd jk m%YaKdj,sh"}
            {/* දෙමව්පියන්/ රැක බලා ගන්නා/ ගුරුවරු සඳහා වන ප්‍රශ්ණාවලිය.  */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <FormFill />
        </AccordionDetails>
      </Accordion>

      <Accordion className="Accordions">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="AccordionSummary"
        >
          <Typography
            style={{
              fontFamily: "Sinhala",
              fontSize: "35px",
              fontWeight: 600,
            }}
          >
            {"m%;sM,"}
            {/* What is dyslexia */}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="AccordionDetails">
          <Typography
            style={{
              fontFamily: "Sinhala",
              fontSize: "25px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {"äiaf,laishd lshùfï ÿ¾j,;djh'"}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ParentForm;
