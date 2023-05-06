import { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import "./LogIn.css";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.fullName.value;
    console.log(fullName);
  };

  return (
    <Grid container component="main" className="root">
      <Grid item xs={false} sm={2} md={4} className="image" />
      <Grid item xs={12} sm={10} md={8} className="formContainer">
        <div className="form">
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
          />
          <button
            buttonStyle="btn--outline"
            buttonSize="btn--medium"
            type="submit"
            onClick={handleSubmit}
            className="logInButton"
          >
            <Typography variant="h5" className="logInLabel">
              mqrkh ùu
              {/* Log In */}
            </Typography>
          </button>
        </div>
      </Grid>
    </Grid>
  );
};

export default LogIn;
