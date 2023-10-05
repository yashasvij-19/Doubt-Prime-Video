import React from "react";
import "../styles/LandingPage.css";
import Navbar from "./Navbar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import HomeCarousel from "./HomeCarousel";
import HomeimageGrid from "./HomeimageGrid";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 18,
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
        <HomeCarousel />
        <div className="home-welcome">
          <h3>Welcome to Prime Video</h3>
          <p>
            Watch the latest movies, TV shows, and award-winning Amazon
            Originals
          </p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Stack direction="row" sx={{ justifyContent: "center" }}>
              <BootstrapButton variant="contained" size="large">
                Sign in to join Prime
              </BootstrapButton>
            </Stack>
          </Link>
        </div>
      </div>
      <div className="image-grid">
        <HomeimageGrid />
        <div className="image-grid-text">
          <h3>Your favorite channels all in one place</h3>
          <p>
            With Prime Video Channels, find shows and movies from
            <br />
            your favorite channels all in one place. Enjoy with an <br />
            add- on subscription to Channels of your choice
          </p>
        </div>
      </div>
      <div className="rent">
        <div className="rent-text">
          <h3>Movie rentals on Prime Video</h3>
          <p>Early Access to new movies, before digital subscription</p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ width: 500, fontFamily: "monospace" }}
            >
              <BootstrapButton variant="contained" size="large">
                Rent now
              </BootstrapButton>
            </Stack>
          </Link>
        </div>
      </div>
      <div className="family">
        <div className="family-text">
          <h4>Family Friendly</h4>
          <p>
            With easy to use Parental Controls and a dedicated
            <br />
            kids page, enjoy secure, ad-free kids entertainment.
            <br />
            Kids can enjoy popular TV shows like Peppa Pig, <br /> Powerpuff
            Girls, and Chhota Bheem.
          </p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            {" "}
            <Stack
              direction="row"
              spacing={2}
              sx={{ width: 500, fontFamily: "monospace" }}
            >
              <BootstrapButton variant="contained" size="large">
                Get Started
              </BootstrapButton>
            </Stack>
          </Link>
        </div>
      </div>
      <div className="fire-stick">
        <div className="fire-stick-text">
          <h3>Even better with Fire TV Stick</h3>
          <p>
            The biggest movies and TV shows are always better <br />
            on a big screen. Simply plug in your Amazon Fire
            <br /> TV Stick and stream on any HDTV. Press the voice
            <br /> button on the remote and say the name of the title
            <br /> you want to watch to find it in seconds.
          </p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{ width: 500, fontFamily: "monospace" }}
            >
              <BootstrapButton variant="contained" size="large">
                Get Started
              </BootstrapButton>
            </Stack>
          </Link>
        </div>
      </div>
      <div className="footer">
        <img
          src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"
          alt="prime-video-logo"
        />
        <div className="footer-text">
          <a
            href="https://www.primevideo.com/help/ref=av_auth_ter?nodeId=202064890"
            target="_blank"
          >
            Terms and Privacy Notice
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="./Login.js" target="_blank">
            Send us feedback
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href="https://www.primevideo.com/help/ref=av_auth_hp"
            target="_blank"
          >
            Help
          </a>
          <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
