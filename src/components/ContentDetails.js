import React from "react";
import Navbar from "./Navbar";
import "../styles/ContentDetails.css";
import Chip from "@mui/material/Chip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Tooltip } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import MovieSlider from "./MovieSlider";
import { Link } from "react-router-dom";

const ContentDetails = () => {
  return (
    <div className="main-contentDetails">
      <Navbar />
      <div className="contentDetails">
        <div className="textContent">
          <p> #1 in India</p>
          <h2>Rocky Aur Rani Kii Prem Kahaani</h2>
          <p id="textP">
            A rollercoaster journey taking you through an epic love story in a
            <br />
            new-age era, topped with hearty laughs and posing questions about
            <br /> love, family and the meaning of breaking away from
            generations of
            <br /> family traditions in the name of love.
          </p>
          <p>
            <span>IMDb 6.9&nbsp;&nbsp;2 h 58 min&nbsp;&nbsp;2023</span>
            &nbsp;&nbsp;
            <Chip
              label="X-RAY"
              size="large"
              sx={{ color: "white", backgroundColor: "gray" }}
            />
            &nbsp;
            <Chip
              label="HDR"
              size="large"
              sx={{
                color: "white",
                backgroundColor: "gray",
                fontWeight: "bolder",
              }}
            />
            &nbsp;
            <Chip
              label="UHD"
              size="large"
              sx={{
                color: "white",
                backgroundColor: "gray",
                fontWeight: "bolder",
              }}
            />
            &nbsp;
            <Chip
              label="U/A 13+"
              size="large"
              sx={{
                color: "white",
                backgroundColor: "gray",
                fontWeight: "bolder",
              }}
            />
          </p>
          <p> Comedy · Drama ·Romance</p>
          <p>
            <CheckCircleIcon fontSize="medium" color="primary" />{" "}
            <strong>Watch with a free Prime trial</strong>
          </p>
          <p>
            {" "}
            <Link to="/movies" style={{ textDecoration: "none" }}>
              <Button variant="contained" size="large">
                Watch with Prime <br />
                Start your 30 day free trial
              </Button>
            </Link>{" "}
            <Button variant="contained" size="large">
              Rent UHD ₹279
            </Button>{" "}
            <Button variant="contained" size="large">
              More purchase options
            </Button>{" "}
            <Tooltip title="Trailer">
              <a
                href="https://www.primevideo.com/region/eu/detail/0I6U0N56BVTVGY24EM2FARBNIC/ref=atv_dp_watch_trailer?autoplay=trailer"
                target="_blank"
              >
                <Button variant="contained" size="medium">
                  <PlayCircleFilledIcon />
                </Button>
              </a>{" "}
            </Tooltip>
            <Tooltip title="Watchlist">
              <Button variant="contained" size="medium">
                <AddIcon />
              </Button>
            </Tooltip>
          </p>
          <p>
            Rentals include 30 days to start watching this video and 48 hours to
            finish once started.
          </p>
        </div>
        <div className="banner--fadeBottom" />
      </div>
      <div className="theRows">
        <h2>
          <span>Prime</span> Recommended Movies
        </h2>
        <MovieSlider el={30} />
        <h2>
          <span>Prime</span> Latest Movies
        </h2>
        <MovieSlider el={60} />
        <h2>
          <span>Prime</span> Popular Shows
        </h2>
        <MovieSlider el={90} />
        <h2>
          <span>Prime</span> Amazon Specials
        </h2>
        <MovieSlider el={40} />
      </div>
    </div>
  );
};
export default ContentDetails;
