import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import "./LogIn.css";
import { useNavigate } from "react-router-dom";
import { riskDetection } from "../api/predictionApi";

const LogIn = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    fullName: "",
    username: "",
    password: "",
  });

  const onChangeFilters = (e) => {
    setFormValues((formValues) => ({
      ...formValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    // save(details);
    clearData();
    navigate("/");
    // addPost();
  };

  const clearData = () => {
    setFormValues((formValues) => ({
      ...formValues,
      fullName: "",
      username: "",
      password: "",
    }));
  };

  const addPost = async () => {
    const newPost = {
      data: [
        [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
          0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1,
          1, 1, 0, 0, 0, 1, 0, 0, 0, 1,
        ],
      ],
    };
    try {
      const response = await riskDetection(newPost);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Grid container component="main" className="root">
      <Grid item xs={false} sm={2} md={4} className="image" />
      <Grid item xs={12} sm={10} md={8} className="formContainer">
        <form onSubmit={handleSubmit} className="form">
          <Typography
            variant="h3"
            style={{
              fontFamily: "Sinhala Title",
              fontWeight: 600,
            }}
          >
            wl=re us;=re
          </Typography>
          {/* AKURU MITHURU */}
          <TextField
            name="username"
            label={
              <Typography variant="body1" className="logInLabel">
                mßYS,l kduh
              </Typography>
            }
            required
            variant="outlined"
            fullWidth
            className="textField"
            value={formValues?.username}
            onChange={onChangeFilters}
          />
          <TextField
            name="password"
            label={
              <Typography variant="body1" className="logInLabel">
                uqrmoh
              </Typography>
            }
            required
            type="password"
            variant="outlined"
            fullWidth
            className="textField"
            value={formValues?.password}
            onChange={onChangeFilters}
          />

          <button type="submit" className="logInButton">
            <Typography variant="h5" className="logInLabel">
              mqrkh ùu
              {/* Log In */}
            </Typography>
          </button>
        </form>
      </Grid>
    </Grid>
  );
};

export default LogIn;
