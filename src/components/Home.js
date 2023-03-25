import React from "react";
import { makeStyles } from "@mui/styles";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    minWidth: "400px",
  },
  button: {
    margin: theme.spacing(2),
  },
}));

const Home = ({ open, onClose, onStart }) => {
  const classes = useStyles();

  const handleStartClick = () => {
    onStart();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} className={classes.modal}>
      <Box className={classes.paper}>
        <h2 id="start-menu-title">Find the Hidden Item</h2>
        <p id="start-menu-description">
          Click on the background to move the item. Find it and click on it to
          win!
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={handleStartClick}
          className={classes.button}
        >
          Start
        </Button>
      </Box>
    </Modal>
  );
};

export default Home;
