import React from "react";
import "../styles/Navbar.css";
import AccountMenu from "./AccountMenu";
import MenuHome from "./MenuHome";
import MenuCat from "./MenuCat";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Navbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "35ch",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

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
        <div className="nav-list">
          <ul>
            <li>
              <MenuHome
                title={"Home"}
                opt={"All"}
                optTwo={"Movies"}
                optThree={"TV Shows"}
              />
            </li>
            <li>
              <MenuHome
                title={"Store"}
                opt={"All"}
                optTwo={"Rent"}
                optThree={"Channels"}
              />
            </li>
            <li className="noOption">LiveTV</li>
            <li>
              <MenuCat />
            </li>
            <li id="searchList">
              {" "}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </li>
          </ul>
          <AccountMenu />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
