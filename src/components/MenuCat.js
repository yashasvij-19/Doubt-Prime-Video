import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../styles/Navbar.css";

export default function MenuCat() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const genres = [
    "Action and adventure",
    "Horror",
    "Anime",
    "International",
    "Comedy",
    "Kids",
    "Documentary",
    "Music videos and concerts",
    "Drama",
    "Mystery and thrillers",
    "Fantasy",
    "Romance",
  ];

  const langs = [
    "Hindi",
    "Kannada",
    "English",
    "Marathi",
    "Telugu",
    "Punjabi",
    "Tamil",
    "Malayalam",
    "Gujarati",
    "Bengali",
  ];

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#aaa", fontSize: "1rem" }}
      >
        Categories
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ marginLeft: "-300px" }}
      >
        <div className="catGrid">
          <div className="catGrid1">
            <h3>Genres</h3>
            <br />
            {genres.map((e) => (
              <MenuItem key={e} onClick={handleClose}>
                {e}
              </MenuItem>
            ))}
          </div>
          <div className="catGrid2">
            <h3>Featured Collections</h3>
            <br />
            {langs.map((e) => (
              <MenuItem key={e} onClick={handleClose}>
                {e}
              </MenuItem>
            ))}
          </div>
        </div>
      </Menu>
    </div>
  );
}
