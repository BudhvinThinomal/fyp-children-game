import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import "./SignUp.css";

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    console.log(fullName);
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
