import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "../styles/Watchlist.css";
import Button from "@mui/material/Button";

function Watchlist() {
  const [watchlistItems, setWatchlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [mouseOn, setMouseOn] = useState(null);
  const YOUR_JWT_TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGRhMTgyZGJlZGNmNGY2MDIzODY0MiIsImlhdCI6MTY5NTM5MjEzMCwiZXhwIjoxNzI2OTI4MTMwfQ.fX3zhW6Z89wFzSa5IZgeS62Lcsa-2P8nOCsbrKVukUk";
  const PROJECT_ID = "f104bi07c490";

  const getWatchlist = () => {
    return fetch("https://academics.newtonschool.co/api/v1/ott/watchlist", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${YOUR_JWT_TOKEN}`,
        projectID: PROJECT_ID,
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error fetching watchlist: ", error);
        throw error;
      });
  };

  const handleWatchlist = (showId) => {
    fetch("https://academics.newtonschool.co/api/v1/ott/watchlist/like", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${YOUR_JWT_TOKEN}`,
        projectID: PROJECT_ID,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ showId: showId }),
    })
      .then((response) => response.json())
      .then((data) => setWatchlistItems(data.data.shows))
      .catch((error) => {
        console.error("Error: ", error);
        throw error;
      });
  };

  useEffect(() => {
    getWatchlist()
      .then((data) => {
        setWatchlistItems(data.data.shows);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching watchlist: ", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main-watchlist">
      <Navbar />
      <div className="watchlist">
        <h1>Watchlist</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="watchlist-container">
            {Array.isArray(watchlistItems) ? (
              watchlistItems.map((showId) => (
                <div
                  className="watchList"
                  key={showId.title}
                  onMouseOver={() => setMouseOn(showId.title)}
                  onMouseLeave={() => setMouseOn(null)}
                >
                  {mouseOn === showId.title ? (
                    <div id="hoveredWatch">
                      <video src={showId.video_url} autoPlay />
                      <h2>{showId.title}</h2>
                      <p>{showId.description}</p>
                      <Button
                        id="hoverButton"
                        variant="contained"
                        color="primary"
                        onClick={() => handleWatchlist(showId._id)}
                      >
                        Remove from Watchlist
                      </Button>
                    </div>
                  ) : (
                    <img src={showId.thumbnail} />
                  )}
                </div>
              ))
            ) : (
              <p>No items in watchlist</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
