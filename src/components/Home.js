import React from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Home = () => {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#0069d9",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#0062cc",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  });

  return (
    <div className="home-main">
      <Navbar />
      <div className="home-first-image">
        <div className="home-welcome">
          <h3>Welcome to Prime Video</h3>
          <p>
            Watch the latest movies, TV shows, and award-winning Amazon
            <br />
            Originals
          </p>
          <Stack
            direction="row"
            spacing={2}
            sx={{ width: 500, fontFamily: "monospace" }}
          >
            <BootstrapButton variant="contained" size="large">
              Sign in to join Prime
            </BootstrapButton>
          </Stack>
        </div>
      </div>
      <div className="youth-offers">h</div>
    </div>
  );
};

export default Home;
