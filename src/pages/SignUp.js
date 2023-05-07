import React, { useState } from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import "./SignUp.css";

const SignUp = () => {
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
  };

  const clearData = () => {
    setFormValues((formValues) => ({
      ...formValues,
      fullName: "",
      username: "",
      password: "",
    }));
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
            name="fullName"
            label={
              <Typography variant="body1" className="signUpLabel">
                iïmQ¾K ku
              </Typography>
            }
            required
            variant="outlined"
            fullWidth
            className="textField"
            value={formValues?.fullName}
            onChange={onChangeFilters}
          />
          <TextField
            name="username"
            label={
              <Typography variant="body1" className="signUpLabel">
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
              <Typography variant="body1" className="signUpLabel">
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
          <button type="submit" className="signUpButton">
            <Typography variant="h5" className="signUpLabel">
              ,shdmÈxÑ ùu
              {/* Sign Up */}
            </Typography>
          </button>
        </form>
      </Grid>
    </Grid>
  );
};

export default SignUp;
