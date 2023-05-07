import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Typography,
} from "@mui/material";
// import "./RadioButton.css";

const RadioButton = (props) => {
  const { questionTitle } = props;

  const [formValues, setFormValues] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
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
    // You can do something with the values here, like send them to a server
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" className="form-fieldset">
          <Typography
            variant="h5"
            style={{
              fontFamily: "Sinhala",
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {questionTitle}
          </Typography>
          <RadioGroup
            aria-label="question1"
            name="question1"
            value={formValues?.question1}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="0"
              control={<Radio required />}
              label="Never"
            />
            <FormControlLabel
              value="1"
              control={<Radio required />}
              label="1-2 times"
            />
            <FormControlLabel
              value="3"
              control={<Radio required />}
              label="3-4 times"
            />
            <FormControlLabel
              value="5"
              control={<Radio required />}
              label="5 or more times"
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className="form-fieldset">
          <Typography variant="subtitle1" className="form-question">
            2. How many hours of sleep do you usually get per night?
          </Typography>
          <RadioGroup
            aria-label="question2"
            name="question2"
            value={formValues?.question2}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="4 hours or less"
            />
            <FormControlLabel
              value="5-6"
              control={<Radio />}
              label="5-6 hours"
            />
            <FormControlLabel
              value="7-8"
              control={<Radio />}
              label="7-8 hours"
            />
            <FormControlLabel
              value="9+"
              control={<Radio />}
              label="9 hours or more"
            />
          </RadioGroup>
        </FormControl>

        <FormControl component="fieldset" className="form-fieldset">
          <Typography variant="subtitle1" className="form-question">
            3. How many cups of water do you drink per day?
          </Typography>
          <RadioGroup
            aria-label="question3"
            name="question3"
            value={formValues?.question3}
            onChange={handleRadioChange}
          >
            <FormControlLabel value="0" control={<Radio />} label="None" />
            <FormControlLabel
              value="1-2"
              control={<Radio />}
              label="1-2 cups"
            />
            <FormControlLabel
              value="3-4"
              control={<Radio />}
              label="3-4 cups"
            />
            <FormControlLabel
              value="5+"
              control={<Radio />}
              label="5 or more cups"
            />
          </RadioGroup>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RadioButton;
