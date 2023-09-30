import React from "react";
import Navbar from "./Navbar";
import "../styles/ContentDetails.css";
import Chip from "@mui/material/Chip";

const ContentDetails = () => {
  return (
    <div className="main-contentDetails">
      <Navbar />
      <div className="contentDetails">
        <div className="textContent">
          <p> #1 in India</p>
          <h2>Rocky Aur Rani Kii Prem Kahaani</h2>
          <p>
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
            <Chip label="X-RAY" size="large" />
            &nbsp;
            <Chip label="HDR" size="large" />
            &nbsp;
            <Chip label="UHD" size="large" />
            &nbsp;
            <Chip label="U/A 13+" size="large" />
          </p>
          <p> Comedy · Drama ·Romance</p>
        </div>
      </div>
    </div>
  );
};
export default ContentDetails;
