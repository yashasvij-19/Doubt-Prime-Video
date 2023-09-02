import React from "react";
import { useState } from "react";
import "../styles/Navbar.css";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { styled } from "@mui/material/styles";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClick1 = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const DialogBox = styled(Box)({
    position: "static",
    borderRadius: "8px",
    backgroundColor: "#191e25",
    boxShadow: "0 4px 8px 2px rgba(0,5,13,.5)",
    minWidth: "10%",
    zIndex: "3",
    padding: "3px",
  });

  return (
    <div className="navbar-main">
      <div className="navbar-links">
        <div id="logo-div">
          <a href="#">
            <img
              src="https://m.media-amazon.com/images/G/01/digital/video/web/Logo-min.png"
              alt="prime-video-logo"
              className="prime-video-logo"
            />
          </a>
        </div>
        <div>
          <ul className="ul-links">
            <li aria-describedby={id} onMouseOver={handleClick}>
              Home &nbsp;<i className="fas fa-angle-down"></i>
            </li>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <DialogBox>
                <ul className="home-links" onMouseOver={handleClick1}>
                  <li>All</li>
                  <li>Movies</li>
                  <li>TV Shows</li>
                </ul>
              </DialogBox>
            </Popper>
            <li aria-describedby={id} onMouseOver={handleClick}>
              Store &nbsp;<i className="fas fa-angle-down"></i>
            </li>
            <Popper id={id} open={open} anchorEl={anchorEl}>
              <DialogBox>
                <ul className="home-links">
                  <li>All</li>
                  <li>Movies</li>
                  <li>TV Shows</li>
                </ul>
              </DialogBox>
            </Popper>
            <li>LiveTv</li>
            <li>
              Categories &nbsp;&nbsp; <i className="fas fa-angle-down"></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-profile"></div>
    </div>
  );
};
export default Navbar;
