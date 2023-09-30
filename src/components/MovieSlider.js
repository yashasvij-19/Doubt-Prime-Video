import React, { useEffect, useState } from "react";
import "../styles/MovieSlider.css";

const MovieSlider = ({ el }) => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(el);
  const [totalPages, setTotalPages] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await fetch(
          `https://academics.newtonschool.co/api/v1/ott/show?page=${page}&limit=10`,
          {
            headers: { projectId: "f104bi07c490" },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const shows = data.data;

        setMovies(shows);
        setTotalPages(10);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(currentPage);
  }, [currentPage]);

  const prevSlide = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(totalPages);
    }
  };

  const nextSlide = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };

  const toggleWatchlist = (movie) => {
    if (watchlist.includes(movie.id)) {
      // Remove from watchlist
      setWatchlist(watchlist.filter((id) => id !== movie.id));
    } else {
      // Add to watchlist
      setWatchlist([...watchlist, movie.id]);
    }
  };

  return (
    <div className="movie-slider-container">
      <div className="movie-slider">
        <button className="slider-button prev" onClick={prevSlide}>
          <i className="fas fa-angle-left"></i>
        </button>
        <div className="slider-content">
          {movies.map((movie, index) => (
            <div
              key={movie.id}
              className={`slide ${index === currentIndex ? "active" : ""}`}
              onMouseEnter={() => setHoveredMovie(movie)}
              onMouseLeave={() => setHoveredMovie(null)}
            >
              <img src={movie.thumbnail} alt={movie.title} />
              <div className="movie-info">
                <p>{movie.title}</p>
                {hoveredMovie === movie && (
                  <div className="additional-info">
                    <p>Directed by: {movie.director}</p>
                    <p id="breakIt">{movie.description}</p>
                    <button
                      className={`watchlist-button ${
                        watchlist.includes(movie.id) ? "added" : ""
                      }`}
                      onClick={() => toggleWatchlist(movie)}
                    >
                      {watchlist.includes(movie.id)
                        ? "Added"
                        : "Add to Watchlist"}
                    </button>
                    <button>
                      <a href={movie.video_url} target="_blank">
                        Watch now
                      </a>
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="slider-button next" onClick={nextSlide}>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default MovieSlider;
