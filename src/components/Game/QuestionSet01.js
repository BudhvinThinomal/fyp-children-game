import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
  Box,
} from "@mui/material";
import "./Questions.css";

const Questions = (props) => {
  const { handleResetClick } = props;
  const [formValues, setFormValues] = useState({
    Q_P_1: "",
    Q_P_2: "",
    Q_P_3: "",
    Q_P_4: "",
    Q_P_5_1: "",
  });

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  // Define an array of question objects
  const questions = [
    {
      id: "Q1",
      mainHeading: "01' Tnf.a orejdf.a$ YsIHhdf.a w;a wl=re wmeyeÈ,so@",
      question: "Question 1",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: "Q2",
      mainHeading: "01' Tnf.a orejdf.a$ YsIHhdf.a w;a wl=re wmeyeÈ,so@",
      question: "Question 2",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: "Q3",
      mainHeading: "01' Tnf.a orejdf.a$ YsIHhdf.a w;a wl=re wmeyeÈ,so@",
      question: "Question 3",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: "Q4",
      mainHeading: "Heading 02",
      question: "Question 4",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: "Q5",
      mainHeading: "Heading 02",
      question: "Question 5",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: "Q6",
      mainHeading: "Heading 02",
      question: "Question 6",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: "Q7",
      mainHeading: "Heading 03",
      question: "Question 7",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: "Q8",
      mainHeading: "Heading 03",
      question: "Question 8",
      options: ["Option 1", "Option 2", "Option 3"],
    },
    {
      id: "Q9",
      mainHeading: "Heading 03",
      question: "Question 9",
      options: ["Option 1", "Option 2", "Option 3"],
    },
  ];

  // Split the questions into groups of 3
  const questionGroups = [];
  for (let i = 0; i < questions.length; i += 3) {
    questionGroups.push(questions.slice(i, i + 3));
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textAlign="center"
      height="100%"
      marginTop="6rem"
      marginBottom="auto"
    >
      {questionGroups.map((group) => (
        <Box key={group[0].id} marginY="15px">
          <Typography
            variant="h5"
            style={{
              fontFamily: "Sinhala",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {group[0].mainHeading}
          </Typography>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            textAlign="center"
          >
            {group.map((question) => (
              <FormControl component="fieldset" key={question.id}>
                <Typography variant="h6">{question.question}</Typography>
                <RadioGroup
                  aria-label={question.question}
                  name={question.id}
                  value={formValues[question.id]}
                  onChange={handleRadioChange}
                >
                  {question.options.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      value={option}
                      control={<Radio />}
                      label={option}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            ))}
          </Box>
        </Box>
      ))}
      <button type="submit" onClick={handleResetClick} className="submitButton">
        <Typography
          variant="h5"
          style={{
            fontFamily: "Sinhala",
            fontWeight: 600,
            display: "inline-block",
          }}
        >
          Tõ
        </Typography>
      </button>
    </Box>
  );
};

export default Questions;

{
  /* <button
type="submit"
onClick={handleResetClick}
className="submitButton"
>
<Typography
  variant="h5"
  style={{
    fontFamily: "Sinhala",
    fontWeight: 600,
    display: "inline-block",
  }}
>
  Tõ
 
</Typography>
</button> */
}
